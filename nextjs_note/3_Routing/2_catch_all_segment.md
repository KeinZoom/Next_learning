### routing_catch all segment
- a way to match variable domain combination
- use expand operator and square brackets
- `slug` in `params` to receive the segments
- if no segment is passed into, use `[[...slug]]` for optional slug

    ```typescript
    export default function Docs({
    params,
    }: {
    params: {
        slug: string[];
    };
    }) {
    const slug = params.slug;
    if (slug?.length === 2) {
        return (
        <h1>
            feature {slug[0]} for example {slug[1]}
        </h1>
        );
    }
    if (slug?.length === 1) {
        return <h1> feature page {slug[0]}</h1>;
    }
    <!-- [[...slug]] for optional slug -->
    return <h1>docs home page</h1>;
    }

    ```