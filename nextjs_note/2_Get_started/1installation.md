### 1. Installation
1. quick install
`npx create-next-app@latest`

### 2. 2 significant concepts
1. React Server Components(RSC)
   - a new architecture introduced by React in verision 18

**Server Components**:
   1. all components are **Server components by default**
   2. run tasks like reading files or fetching data from a database
   3. cannot use hooks or handle user interactions

**Client Components**:
   1. to create a Client Components, add "use client" at the top of the component file
   2. cannot perform tasks like reading files, instead they could use hooks and manage interactions