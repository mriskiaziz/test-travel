import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export default function withAuth(middleware, requireAuth = []) {
  return async (req, next) => {
    const pathname = req.nextUrl.pathname;

    if (pathname == "/login") {
      const token = await getToken({ req, secret });

      if (token) {
        console.log(token);
        const url = new URL("/admin", req.url);
        return NextResponse.redirect(url);
      }else{
        return NextResponse.next();
      }
    }

    if (requireAuth.includes(pathname)) {
      const token = await getToken({ req, secret });
      console.log(token);

      if (!token) {
        const url = new URL("/login", req.url);
        return NextResponse.redirect(url);
      }
    }
    return middleware(req, next);
  };
}
