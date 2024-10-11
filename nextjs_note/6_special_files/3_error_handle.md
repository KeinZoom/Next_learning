### Error handling
- automatically wrap a route segment and its nested children in a **React Error** Boundary
- **isolate errors to affected segments** while keeping the rest of the application functional
- add functionality to attempt to **recover** from an error **without a full page reload**

    ```typescript
    // error.tsx
    "use client";
    export default function ErrorBoundary({ error }: { error: Error }) {
    return <h1>Error occurred, {error.message}</h1>;
    }
    ```

### Recovering from errors
- some errors may not be serious, and can be recovered by simply refresh
- `reset` the method provided by next.js, attempt to rerender
    ```typescript
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
    ```

### Errors in nested routes
- Errors in nested segments will bubble up to seek the nearest `ErrorBoundary` automatically

### Errors in the layout
- ErrorBoundary cannot catch errors thrown from `layout.tsx` in the same segments, it works once you put the `error.tsx` upper to the parent segment.