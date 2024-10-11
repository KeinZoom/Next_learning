import React from "react";

export default function FeatureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h2>this is review layout</h2>
    </div>
  );
}
