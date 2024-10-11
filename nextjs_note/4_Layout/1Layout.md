### Layouts
- **Page**: UI unique to a route
- **Layout**: **shared** between multiple pages in the app

### create Layouts
- define a layout by default exporting a React component from a `layout.js / layout.tsx` file
- the component should accept a **child prop** that will be populated with a **child page** during rendering - **placeholder**


### nested Layouts
- custom Layouts can be applied to subfolders in the APP folder
- Root Layout applys firstly, then the nested Layout.

### Route Group Layout
- organize project in a manner that does not affect the URL
- **selectively** apply a layout to **certain segments** while leaving others unchanged