### Parallel Routes
- an advanced routing mechanism that allows for the **simultaneous rendering** of multiple pages within the same layout
- defined using a feature known as **slots**, which structures the content in a **modular** fashion
- use the `@folder` naming convention to define a slot, and each slot is passed as a **prop** to its corresponding `layout.tsx` file

### Benefits
- split a single layout into various slots, making the code more **manageable**
- independent route handling
  - each slot can have its own loading and error states
  - this granular control is particularly beneficial in scenarios where different sections load at varying speeds or encounter unique errors
- sub-navigation
  - each slot functions as a mini-app, with own navigation and state management
  - useful in a complex application where different sections serve distinct purposes