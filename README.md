When the symlinked package has a index.js in the root, then it works. Run:

```
node test2.js
```

When the symlinked package has a main package at a custom location, then it doesn't work:

```
node test.js
```

Both cases work with node.js v6.17.1. It starts failinig in node.js v7.1.0 and v8.0.0.
