### Navigation
Users rely on **UI elements** like **links** to navigate
- Clicking on them
- Through programmatic navigation after completing an action

#### Link Component Navigation
- `<Link>` component is a React component that extends the HTML `<a>` element
- to use it, import it from "next/link"
    ```typescript
    import Link from "next/link";

    export default function Products() {
    return (
        <ul>
        <Link href={"/"}>Home</Link>
        <li>
            this is <Link href={"/products/1"}>product 1</Link>
        </li>
        <li>
            this is <Link href={"/products/2"}>product 2</Link>
        </li>
        <li>
            this is
            <!-- replace: modify the history state, instead of adding a new URL -->
            <Link href={"/products/3"} replace>
            product 3
            </Link>
        </li>
        </ul>
    );
    }
    ```