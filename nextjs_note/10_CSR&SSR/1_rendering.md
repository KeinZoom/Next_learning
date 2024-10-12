### Rendering
- process that transform the code into UI

### CSR
#### traditional CSR process
1. C-request
2. S-return Root HTML+JS ref, C-show blank screen
3. C-request JS
4. S-return JS(with components)
5. C-Generate HTML, show interactive UI

#### CSR was popular for SPA, but its drawbacks are obvious
1. **SEO**, a single div tag is not optimal for SEO, little content for Search Engine to index
2. **Performance**, client handles all the work (fetching data, computing the UI and making HTML interactive), slow things down

### SSR
#### SSR process
1. C-request, R- Generate HTML and return FULL static HTML + JS REF
2. C-UI shown, non-interactive
3. C-request JS, R-return JS
4. C-Hydration, interactive UI shown

#### Hydration
- React takes control in the browser, reconstructing the component tree in memory based on the static HTML
- plans the placement of interactive elements
- proceeds to bind the necessary JS logic to elements

### Server-side Solutions
  1. Static Site Generation - SSG
       - SSG occurs at build time once the **application is deployed**. Ideal for content that **doesn't change often**, like blog posts
  2. Server-Side Rendering - SSR
       - SSR renders pages **on-demand** in response to user **requests**. **Personalized content** like social media feeds, where the HTML depends on the logged-in user
       - SSR was a significant improvement over CSR, providing faster initial page loads and better SEO

#### Drawbacks of SSR - all or nothing waterfall
- have to **fetch everything** before showing anything, the server must finish collecting all necessary data before any part of the page can be sent to the client.
- have to **load everything** before you can hydrate anything. The component tree in the browser must exactly match the server-generated component tree for successful hydration. This means that all the JS for components must be loaded.
- have to **hydrate everything** before any interaction; React hydrates the component tree **in a single pass**, it won't stop until finished with the entire tree.