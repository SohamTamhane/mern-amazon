# MERN Amazon

# 1. Create React App
1. npx create-react-app frontend
2. npm start
3. Edit App.js & Create Nav Bar

# 2. Push to Github
1. Remove .git Folder (Open Git Bash)
2. rm -rf .git
3. Move .gitignore file to amazon folder from frontend folder([Remove / from node_modules and build)

# 3. List of Products
1. Create data.js File in src
2. Create images folder in public

# 4. Add Routing to React App
1. npm install react-router-dom
2. import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
3. <\BrowserRouter> <br>
        <\Routes> <br>
            <\Route path="/" element={<\HomeScreen />} /> <br>
            <\Route path="/product/:slug" element={<\ProductScreen />} /> <br>
            <\Route path="*" element={<\ErrorScreen />} /> <br>
        </\Routes> <br>
4. import { useParams } from 'react-router-dom' <br>
    const params = useParams(); <br>
    const {slug} = params; <br>
5. Replace <\a href="" /> with <\Link to="" />

# 5. Create Node.js Server
1. Create new Folder Backend
2. cd backend <br>
    npm init
3. In package.json, <br>
    "type": "module"
4. Write node server.js to start the server. <br>
    (Install JSON Viewer Chrome Extension)
5. npm install nodemon --save-dev
6. "scripts": { <br>
    "start": "nodemon server.js",
7. npm start (to start the server)

# 6. Fetch Data From Backend
1. frontend/package.json -> "proxy":"http://localhost:5000",
2. In frontend, npm install axios
3. In HomeScreen.js, Write the Code to fetch data from backend.
5. replace data.products -> products

# 7. Manage State By Reducer Hook
1. Replace useState with useReducer Hook
2. In frontend, npm install use-reducer-logger --force

# 8. Adding React Bootstrap
1. In frontend, npm install react-bootstrap bootstrap --force
2. Add Bootstrap Components
3. npm install react-router-bootstrap --force