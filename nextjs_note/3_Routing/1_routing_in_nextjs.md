### Routing
- Next.js has a **file-system based** routing mechanism
- URL paths defined by files and folders in the **codebase**

#### Routing Conventions
- All routes must be placed **inside the app folder**
- Each file as a route named as `page.js` or `page.tsx`(default domain is `page.tsx` in the app folder)
- Every folder corresponds to a path segment in the browser URL

#### Nested Routes
- adding subfolders in the route folder that is nested
```
app
| ---blog |
| ------- || first |
| ----- |  |  || page.tsx |
| -------- |  |second
| --- | --- | ---page.tsx |
| --- | --- |page.tsx
|---page.tsx

```

#### dynamic routes
- name the folder with square bracket as a dynamic segment
- the dynamic route passed as a prop to the component
```typescript
// folder named as [productId]
    interface Param {
    productId: string;
    }

    export default function ProductItem({ params }: { params: Param }) {
    return <div>this is product {params.productId}</div>;
    }
```