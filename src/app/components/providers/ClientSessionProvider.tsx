"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: React.ReactNode;
  session?: Session;
}

const ClientSessionProvider: React.FC<ProviderProps> = ({
  children,
  session,
}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default ClientSessionProvider;
