### Unmatched routes
- each slot corresponds to a specific URL, the layout of unmatched slot depends on the Navigation way
    1. Navigation from UI
    Next.js retains the previously active state of a slot regardless of changes in the URL
    2. Page reload
    Next.js immediately searches for a `default.tsx` file within each unmatched slot, the file provides the default content.

#### default.tsx
- `default.tsx` serves as a fallback to render content in case the slot's active state cannot be retrieved.