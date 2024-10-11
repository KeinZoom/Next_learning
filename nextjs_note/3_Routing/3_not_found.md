### custom not_found page
1. default not found page
   - default not found page will navigate to the `not-found.tsx` in the `app` folder
   ```typescript
   <!-- not-found.tsx -->
   export default function NotFound() {
    return (
        <div>
        <h2>Page not found...</h2>
        </div>
    );
    }

   ```

2. conditional not found
   - custom the not found page in the sub-folders with logic decision
   ```typescript
   import ReviewNotFound from "./not-found";

    interface Param {
    productId: string;
    reviewId: string;
    }

    export default function ReviewItem({ params }: { params: Param }) {
    if (parseInt(params.reviewId) > 100) {
        return <ReviewNotFound />;
    }
    return (
        <div>
        review {params.reviewId} for product {params.productId}
        </div>
    );
    }
   ```
