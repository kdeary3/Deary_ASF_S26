1. Create parent directory
2. Create package.json (app blueprint):  
   ```npm init [-y]```
3. Create ```index.ts```
4. Install packages <br>
   ```npm i [package]```
5. Import the packages  
   ```const [package] = require("[package name]")```  
   ex:  
   ```const catMe = require("cat-me")```  
   ```console.log(catMe())```
6. Make sure ```node_modules``` is in same directory
7. Add node_modules folder to .gitignore
   ```node_modules```

TYPESCRIPT: 
8. ```npm install -d typescript```
9. configure ```tsconfig.json```
9. ```npx tsc```