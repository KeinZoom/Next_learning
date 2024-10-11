"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import "./styles.css";

const navList = [
  {
    navName: "Login",
    navPath: "/login",
  },
  {
    navName: "Register",
    navPath: "/register",
  },
  {
    navName: "ForgotPassword",
    navPath: "/forgot-password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const activePath = usePathname();

  return (
    <div>
      <h1>Auth feature layout</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {navList.map((navItem) => (
        <Link
          href={navItem.navPath}
          key={navItem.navName}
          className={
            activePath.startsWith(navItem.navPath)
              ? "font-bold mr-4"
              : "text-blue-400 mr-4"
          }
        >
          {navItem.navName}
        </Link>
      ))}
      {children}
    </div>
  );
}
