### npm doesn't stands for node package manager

### package.json is a configuration for npm

- **Transitive Dependencies:** Our Project is dependent on parcel and parcel itself requires some dependencies and again those dependencies might be dependent on other dependencies this is called **Transitive Dependencies.**

If you want to install, remove or upgrade a package you'll use **npm**.

If you want to execute a package you'll use **npx**.

Adding react and react-dom through CDN to our project is not a good way.

- Fetching from a CDN will cost us network call
- Also npm helps us to manage versions of react whereas CDN is for only fixed version.

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minimization of Files
- Compression of Files
- Bundling
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostics of app
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles

```
npx parcel build index.html
// This creates an error, simple remove the "main": "App.js" property, because in parcel bundling starts from index.html
```
