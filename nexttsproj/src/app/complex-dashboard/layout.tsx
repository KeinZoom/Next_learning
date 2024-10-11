import React from "react";

export default function DashBoardLayout({
  children,
  users,
  revenues,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenues: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenues}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  );
}
