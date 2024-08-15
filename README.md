Add a script tag and visit site cdn node and insert links in index.html and also a link to app.js

But CDN links is not a good way to bring react to a project  other way is line 28

How to set up ssh in git in windos

NPN does not stands for Node Package Manager but works as a Node Package Manager.
npm init

package.json is a configuration for NPN.

Our project depends upon packages and packages depends upon a lot of dependencies and all this is managed by NPN.  What is the version of that package NPN will take care of it.
Our project depends upon packages and packages depends upon a lot of dependencies and all this is managed by NPN.  What is the version of that package NPN will take care of it.

We need a bundler to bundle all our code for production. bundlers like wheat,webpack,parcel , etc.

we will be using parcel to install type      npm install -D parcel

we can use .gitignore file and type the name of the files in this file of which we do not want to commit. eg /node_modules/

^ carret is used to mention to allow minor changes.
~ tindle is used to mention to alllow major changes.

to IGNITE OUR APP WE  need to type                npx parcel index.html

npx is used to excute packages.

to install react as a package in a project type    npm install react   and also   npm install react-dom
and now we will have to import react in app.js using    import React from "react" and import ReactDOM from "react-dom"    after this write a attribute       "type=modue" in script tag of index.html  sometimes it even gives an error try deleting .parcel-cache folder nd it will work perfectly fine.

# PARCEL
- DEV BUILD 
- LOCAL SERVER
-HMR = HOT MODULE REPLACEMENT
- FILE WATCHING ALGORITHM WRITTEN IN C++
- CACHING - Faster Builds
- IMAGE OPTIMIZATION
- Minfication
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling (It make sure that our app runs everywhere even on older versions of browsers)
- Diagnostics
- Error handling
- Tree Shaking - Remove unsed code
- Different DEV and Prosduction builts

to build a production rady app type   npx parcel build index.html    also remove the main line from package.json

BROWSERS LIST  - to tell our app to work on which versions of browser. for this 
- you can refer to browserslist.dev
- open package.json and type "browserslist" : ["last 2 versions of chrome", "last 10 Firefox versions" ]