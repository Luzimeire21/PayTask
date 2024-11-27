import {
  clerkMiddleware,
  createRouteMatcher,
  clerkClient,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/select(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();

  const client = await clerkClient();
  const { userId } = await auth();

  if (userId) {
    const user = await client.users.getUser(userId);
    const role = user.privateMetadata ? user.privateMetadata.role : null;

    const isSelectPage = new URL(req.url).pathname.startsWith("/select");

    if (!role && !isSelectPage) {
      return NextResponse.redirect(new URL("/select", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
