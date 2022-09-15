When the symlinked package has a index.js in the root, then it works. Run:

```
node test2.js
```

When the symlinked package has a main package at a custom location, then it doesn't work:

```
node test.js
```
