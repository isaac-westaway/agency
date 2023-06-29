"use client"

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  NO_GROUP
} from "kbar";

const actions = [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => (window.location.pathname = "blog"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => (window.location.pathname = "contact"),
  },
]

interface KBarProviderProps {
    children: React.ReactNode
}

const ClientKBarProvider: React.FC<KBarProviderProps> = ({ children }) => {
  return (
    <div className="">
      <KBarProvider actions={actions}>
        {children}
      </KBarProvider>
    </div>
  );
}

export default ClientKBarProvider;