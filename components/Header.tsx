"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const { user } = useUser();
  const path = usePathname();

  return (
    <header
      className="flex items-center py-5 px-10 bg-zinc-100 
    justify-between font-bold text-zinc-900"
    >
      <Link href="/">Home</Link>
      {!user ? (
        <div className="flex gap-5">
          <SignedOut>
            <SignInButton>Login</SignInButton>
            <SignUpButton>Sign Up</SignUpButton>
          </SignedOut>
        </div>
      ) : (
        <div className="flex gap-1 items-center">
          {user && path == "/" ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <UserButton />
            </>
          ) : (
            <SignedIn>
              <UserButton showName />
            </SignedIn>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
