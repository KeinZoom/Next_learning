"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <h1>
      Error occurred, {error.message}{" "}
      <button onClick={reset}>Click to refresh</button>
    </h1>
  );
}
