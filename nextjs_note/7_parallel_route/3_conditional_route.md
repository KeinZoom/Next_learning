### Conditional route

- use a state value to determine which part of slot is enable, make it show in a separate way.

```typescript
const isLogin: boolean = false;
return isLogin ? (
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
) : (
  login
);
```
