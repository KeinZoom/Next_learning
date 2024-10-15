### React Server Components - RSC
- Aims to leverage the strengths of **both Server and Client environments**, optimizing for efficiency, load times and interactivity.
- **Client** Components and **Server** Components
  - based on **where they execute** and **the specific environment** they are designed to interact with

#### Client Components
- familiar with **traditional React components**
- rendered on the CSR, but can also be rendered to HTML on SSR, allowing users to **immediately see the page's HTML content** rather that a blank screen, as an optimization strategy.
- have access to the **client environment**, such as the browser, allowing them to use state, effects and event listeners, browser-exclusive APIs like **geolocation** or **localStorage**.

#### Server Components
- specifically designed to **operate exclusively on the server**
- code stays **on the server** and never downloaded to the client

#### Benefits
1. Reduced Bundle Sizes<br>
   large dependencies to remain **server-side**, eliminating the need to download, parse and execute JS for Server components, removing the hydration step.

2. Direct **access to Server-side Resources**<br>
   direct access to databases or file systems. Effient data fetching and rendering **without needing additional client-side processing**. **Only** the **interactive** pieces of code to the client

3. Enhanced Security<br>
   keeping **sensitive data and logic**, including tokens and API keys, away from the Client.

4. Improved **Data Fetching**<br>
   On the client-side using useEffect, a child component cannot begin loading until the parent component has **finished loading**<br>
   Moving this logic to the server, **request latency** is reduced

5. Caching <br>
   RSC enables caching of the results, which can be **reused in subsequent requests** and across different users.

6. Faster initial Page Load and First Contentful Paint<br>
   Generating HTML on the server, pages become immediately visible to users without the delay of downloading, parsing and executing JS.

7. Improved SEO <br>
   the Server-Rendered HTML is **fully accessible to search engine bots**, enhancing the indexability.

8. Efficient Straming<br>
   the rendering process divided into manageable chunks, allowing users to start seeing parts of the page earlier.


### RSC and Next.js
- The **App Router** in Next.js is built around the **RSC architecture**.