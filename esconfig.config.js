#!/usr/bin/env node

// require('esbuild').buildSync({
//     entryPoints: ['app.jsx'],
//     bundle: true,
//     minify: true,
//     sourcemap: true,
//     target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
//     outfile: 'out.js',
//   })



  import esbuildServe from "esbuild-serve";

  esbuildServe(
    {
      logLevel: "info",
      entryPoints: ["src/index.js"],
      bundle: true,
      outfile: "www/main.js",
      sourcemap: true,
    },
    { root: "www" }
  );
