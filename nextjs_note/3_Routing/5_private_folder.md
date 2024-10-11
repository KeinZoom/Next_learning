### Private Folders
- private implementation detail
- not be considered by the **routing system**
- The folder and all its subfolders are excluded from routing
- syntax: Prefix the folder name with an `underscore(_) / %5F`(URL-encoded form of _)

#### Scenarios:
- separating UI logic from routing logic
- consistently organizing internal files across a project
- sorting and grouping files
- avoiding naming confilicts with future Next.js file conventions