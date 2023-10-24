"use client";

import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ session, children }) => {
  return <SessionProvider session={session} >{children}</SessionProvider>;
};
