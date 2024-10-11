import React from "react";

export default function PhotoFeedLayout({
  children,
  model,
}: {
  children: React.ReactNode;
  model: React.ReactNode;
}) {
  return (
    <>
      <div>{model}</div>
      <div>{children}</div>
    </>
  );
}
