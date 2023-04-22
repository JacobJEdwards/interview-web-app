import { createCookieSessionStorage, redirect } from "@remix-run/node";
import type { Request, SessionData } from "@remix-run/node";
import { Role } from "server/types/generated/client";

type LoginForm = {
  email: string;
  password: string;
};

interface UserSessionData extends SessionData {
  userId?: string;
  userRole?: Role;
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
  const user = json.user;
  return { userId: user.id, userRole: user.role };
}

// separate login functions for student and teacher due to database structure
// export async function studentLogin({
//     email,
//     password,
// }: LoginForm): Promise<string> {
//     const response = await fetch("http://localhost:6060/auth/studentLogin", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//     });
//
//     if (response.status !== 200) {
//         throw new Error("Invalid username or password");
//     }
//     const json = await response.json();
//     const user = json.user;
//     return user.id;
// }
//
// export async function teacherLogin({
//     email,
//     password,
// }: LoginForm): Promise<string> {
//     const user = await fetch("http://localhost:6060/auth/teacherLogin", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//     });
//
//     if (user.status === 401) {
//         throw new Error("Invalid username or password");
//     }
//
//     const { id } = await user.json();
//     return id;
// }

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
export async function getUserId(
  request: Request
): Promise<{ userId?: string; userRole?: string }> {
  const session = await getUserSession(request);

  const userId = session.get("userId") as string;
  const userRole = session.get("userRole") as string;
  console.log(userId, userRole);

  return { userId, userRole };
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
): Promise<string> {
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
  const { userId, userRole } = await getUserId(request);

  if (!userId || !userRole) {
    return null;
  }

  try {
    const user = await fetch(`http://localhost:3000/auth/users/${userId}`);
    return user.json();
  } catch (error) {
    throw logout(request);
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
  userId: string,
  userRole: Role,
  redirectTo: string
): Promise<Response> {
  const session = await storage.getSession();
  session.set("userId", userId);
  session.set("userRole", userRole);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}
