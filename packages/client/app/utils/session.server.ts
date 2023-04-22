import { createCookieSessionStorage, redirect } from "@remix-run/node";
import type { Request, SessionData } from "@remix-run/node";
import { Role } from "server/types/generated/client";
import type { Module, User, Project } from "server/types/generated/client";

type LoginForm = {
    email: string;
    password: string;
};

export interface UserSessionData extends SessionData {
    userId: number;
    userRole: Role;
    userName: string;
}

export async function login({
    email,
    password,
}: LoginForm): Promise<UserSessionData> {
    const response = await fetch("http://localhost:6060/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (response.status !== 200) {
        throw new Error("Invalid username or password");
    }
    const json = await response.json();
    const user: User = await json.user;
    return { userId: user.id, userRole: user.role, userName: user.name };
}

// session storage
const sessionSecret = process.env.SECRET || "secret";
if (!sessionSecret) {
    throw new Error("You must set a session secret");
}

const storage = createCookieSessionStorage<UserSessionData>({
    cookie: {
        name: "__session",
        secure: process.env.NODE_ENV === "production",
        secrets: [sessionSecret],
        path: "/",
        sameSite: "lax",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
    },
});

// session functions
function getUserSession(
    request: Request
): ReturnType<typeof storage.getSession> {
    return storage.getSession(request.headers.get("Cookie") || "");
}

// get user id and type from session
export async function getUserId(request: Request): Promise<UserSessionData> {
    const session = await getUserSession(request);

    const userId = session.get("userId") as number;
    const userRole = session.get("userRole") as Role;
    const userName = session.get("userName") as string;

    return { userId, userRole, userName };
}

export async function requireUserId(
    request: Request,
    redirectTo: string = new URL(request.url).pathname
): Promise<number> {
    const { userId, userRole } = await getUserId(request);

    if (!userId || !userRole) {
        const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
        throw redirect(`/login?${searchParams.toString()}`);
    }
    return userId;
}

export async function requireUserType(
    request: Request,
    redirectTo: string = new URL(request.url).pathname
): Promise<string> {
    const { userRole } = await getUserId(request);

    if (!userRole) {
        const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
        throw redirect(`/login?${searchParams.toString()}`);
    }
    return userRole;
}

// check if user is logged in
export async function requireUser(
    request: Request,
    redirectTo: string = new URL(request.url).pathname
): Promise<void> {
    await requireUserId(request, redirectTo);
    await requireUserType(request, redirectTo);
}

export async function getUser(request: Request) {
    const { userId } = await getUserId(request);

    if (!userId) {
        return null;
    } else {
        try {
            const user = await fetch(`http://localhost:6060/api/users/${userId}`);
            const json: User = await user.json();
            // not returning password
            return {
                id: json.id,
                role: json.role,
                name: json.name,
                email: json.email,
            };
        } catch (error) {
            throw logout(request);
        }
    }
}

export async function getUserModules(request: Request) {
    const { userId } = await getUserId(request);

    if (!userId) {
        return null;
    } else {
        try {
            const modules = await fetch(
                `http://localhost:6060/api/users/${userId}/modules`
            );
            const json: Module[] = await modules.json();
            return json;
        } catch (error) {
            return null;
        }
    }
}

// logout
export async function logout(request: Request): Promise<Response> {
    const session = await getUserSession(request);
    return redirect("/login", {
        headers: {
            "Set-Cookie": await storage.destroySession(session),
        },
    });
}

export async function createUserSession(
    userId: number,
    userRole: Role,
    userName: string,
    redirectTo: string
): Promise<Response> {
    const session = await storage.getSession();
    session.set("userId", userId);
    session.set("userRole", userRole);
    session.set("userName", userName);

    return redirect(redirectTo, {
        headers: {
            "Set-Cookie": await storage.commitSession(session),
        },
    });
}
