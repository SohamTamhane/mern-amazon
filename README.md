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