### Intercepting Routes

- **intercept or stop** the default routing behaviour to **present an alternate** view or component when navigating through the UI, while still presevering the intended route for scenarios like page reloads

### Intercepting Routes Conventions

1. (.) to match segments on **the same level**
2. (..) to match segments **one level above**
3. (..)(..) to match segments **2 levels above**
4. (...) to match segments **from the root** app directory

which to use depends on the folder level of `page.tsx` and `target route`

```
│  │  ├─ 📁f1
│  │  │  ├─ 📁(.)f2
│  │  │  │  └─ 📄page.tsx
│  │  │  ├─ 📁f2
│  │  │  │  └─ 📄page.tsx
│  │  │  ├─ 📁f3
│  │  │  │  ├─ 📁(...)about
│  │  │  │  │  └─ 📄page.tsx
│  │  │  │  └─ 📄page.tsx
│  │  │  ├─ 📁f4
│  │  │  │  ├─ 📁(..)f3
│  │  │  │  │  └─ 📄page.tsx
│  │  │  │  └─ 📄page.tsx
│  │  │  └─ 📄page.tsx
```
