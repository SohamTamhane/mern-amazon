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
3. <\BrowserRouter>
        <\Routes>
            <\Route path="/" element={<\HomeScreen />} />
            <\Route path="/product/:slug" element={<\ProductScreen />} />
            <\Route path="*" element={<\ErrorScreen />} />
        </\Routes>
    </>
4. import { useParams } from 'react-router-dom'
    const params = useParams();
    const {slug} = params;
5. Replace <\a href="" /> with <\Link to="" />