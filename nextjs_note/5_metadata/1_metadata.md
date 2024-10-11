### Routing Metadata

- relative to SEO
- `Next.js` introduced the Metadata API which allows you to define metadata for each page

### Configuring Metadata

1. Export a `static` metadata object
2. Export a `dynamic generateMetadata` function

#### Metadata rules

1.  Both `layout.tsx` and `page.tsx` can export metadata
2.  defined in a layout, it applies to all pages in that layout
3.  defined in a page, it applies only to that page
4.  Metadata loaded in order, from root level to the final
5.  Metadata gets combined when multiple places storing it for the same route, and properties in the `page.tsx` will replace the metadata in the `layout.tsx`

- static metadata

  ```typescript
  export const metadata = {
    title: "about page",
    description: "this is description metadata",
  };

  export default function About() {
    return <div>this is About</div>;
  }
  ```

- dynamic metadata(both static and dynamic method)

  ```typescript
  // synchronous
  export function generateMetadata({ params }: { params: Param }): Metadata {
    return {
      title: `iphone ${params.productId}`,
      description: `this is description of iphone ${params.productId}`,
    };
  }

  // asynchronous
  export const generateMetadata = async ({
    params,
  }: {
    params: Param;
  }): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(params.productId);
      }, 100);
    });

    return {
      title: `iphone ${title}`,
    };
  };
  ```
