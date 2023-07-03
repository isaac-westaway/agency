"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type props = {
  children?: React.ReactNode
}

const ClientSessionProvider = ({
  children,
}: props) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default ClientSessionProvider;
