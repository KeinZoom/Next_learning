- special files in Next.js
1. page.tsx
2. layout.tsx
3. not-found.tsx
4. template.tsx
5. loading.tsx
6. error.tsx

### Component Hierarchy
```typescript
<Layout>
    <Template>
        <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
                <ErrorBoundary fallback={<NotFound />}>
                    <Page />
                </ErrorBoundary>
            <Suspense>
        </ErrorBoundary>
    </Template>
</Layout>
```
