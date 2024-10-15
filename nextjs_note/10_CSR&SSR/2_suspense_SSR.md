### Suspense SSR Architecture
- Use the `<Suspense>` component to unlock 2 major SSR features:
    1. HTML **streaming** on the server
        - you don't have to fetch everything before showing anything
        - section delays, it can be **seamlessly integrated** into the stream later
    2. **Selective hydration** on the client
        - allows for the hydration of sections as they become available, **before** the rest of the HTML and the JS code **fully downloaded**
        - React begins **hydrating as soon as possible**, prioritizing hydration based on user interactions while multiple components are awaiting hydration

#### Code splitting
- mark specific code segments as **not immediately** necessary for **loading**, signalling your bundler to segregate them into separate `<script>` tags
- Using `React.lazy` for code splitting, separate less important code from the primary JS bundle

### Drawbacks of Suspense SSR
- Although JS is streamed to the browser asynchronously, the entire code must be downloaded. **Should users have to download so much data?**
- **All React components** undergo hydration, spending resources and extending the loading times, and their devices need to process and render components that might not be required
- The bulk of JS execution still takes place on the user's device, slowing down the performance

``` typescript
import { lazy } from 'react';
const MainContent= lazy(() => import('./MainContent.js'));

<Layout>
    <Header/>
    <Sidenav/>
    <Suspense fallback={<Spinner />}>
        <MainContent/>
    </Suspense>
    <Footer/>
</Layout>
```

### Challenges
1. Increased bundle sizes leading to **excessive downloads** for users
2. Unnecessary hydration **delaying interactivity**
3. **Extensive client-side processing** results in poor performance