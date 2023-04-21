import { createCookieSessionStorage, redirect } from "@remix-run/node";
import type { Request, SessionData } from "@remix-run/node";

type LoginForm = {
  email: string;
  password: string;
};

interface UserSessionData extends SessionData {
  userId?: string;
  userType?: string;
}

// separate login functions for student and teacher due to database structure
export async function studentLogin({
  email,
  password,
}: LoginForm): Promise<string> {
  const user = await fetch("http://localhost:3000/auth/studentLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (user.status === 401) {
    throw new Error("Invalid username or password");
  }

  const { id } = await user.json();
  return id;
}

export async function teacherLogin({
  email,
  password,
}: LoginForm): Promise<string> {
  const user = await fetch("http://localhost:3000/auth/teacherLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (user.status === 401) {
    throw new Error("Invalid username or password");
  }

  const { id } = await user.json();
  return id;
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
export async function getUserId(
  request: Request
): Promise<{ userId?: string; userType?: string }> {
  const session = await getUserSession(request);

  const userId = session.get("userId") as string;
  const userType = session.get("userType") as string;

  return { userId, userType };
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
): Promise<string> {
  const { userId, userType } = await getUserId(request);

  if (!userId || !userType) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams.toString()}`);
  }
  return userId;
}

async function requireUserType(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
): Promise<string> {
  const { userType } = await getUserId(request);

  if (!userType) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams.toString()}`);
  }
  return userType;
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
  const { userId, userType } = await getUserId(request);

  if (!userId || !userType) {
    return null;
  }

  try {
    const user = await fetch(
      `http://localhost:3000/auth/${userType}/${userId}`
    );
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
  userType: string,
  redirectTo: string
): Promise<Response> {
  const session = await storage.getSession();
  session.set("userId", userId);
  session.set("userType", userType);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}
