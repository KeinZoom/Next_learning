### Templates
- Templates are similar to layouts in that they wrap each **child layout or page**
- a new **instance** of the component is mounted when navigating between routes share a template, DOM elements are recreated.
- state is not preserved, and effects are re-synchronized

#### how to define template
- Exporting a default React component from a `template.js` or `template.tsx`
- template also includes a **children prop** which will render the **nested segments** in the route

- `<input>` sharing the same Layout will not rerender when navigating, while it will recreate when the segments sharing the same template.
    ```typescript
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
    ```

- both `Layout` and `template` work
  order of rendering:<br> `Layout` => `template` => `page`