# README

### NPM packages

- Frontend (React)

```javascript
//Essential
"react-router-dom": "^5.1.2",
"react-redux": "^7.1.3",
"redux": "^4.0.5"
"redux-form": "^8.2.6",
"redux-thunk": "^2.3.0"

//CSS framework
// 1. Need to decide what to use (e.g. bootstrap, material design or others)
// 2. Check 'https://bundlephobia.com/' for cost of npm package
// 3. Do you guys wanna use 'SASS'? Or just CSS framework (e.g. bootstrap) with plain CSS?
// "bootstrap": "^4.4.1",
// "react-bootstrap": "^1.0.0-beta.16",
// "node-sass": "^4.13.0",
// "normalize.css": "^8.0.1",

},
```

- Backend (Express)

```javascript
"dependencies": {
    "aws-sdk": "^2.607.0",
    "celebrate": "^11.0.1",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "local": "^0.3.3",
    "mongoose": "^5.8.7",
    "morgan": "^1.9.1",
    "multer": "^1.4.2",
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0",
    "passport-local-mongoose": "^6.0.1"
  },
  "devDependencies": {
    "forever": "^2.0.0",
    "nodemon": "^2.0.2"
  }
```

---

### Overview

4. Set up redux
5. After finishing all the initial set-ups above, team lead push this project to GitHub (so that team members can have a copy of code)
6. Project Management: distribute components based on complexity and priority (So that we can start working on different components)
7. Work on reusable components
8. Work on individual components

---

---

### 3. Set up file structure

- Structure in drawing

![FileStructure](./img/file_structure.JPG)

- Structure in words

src\actions

-index.js

src\components

-PrivateRoute.js

src\components\forms (individual components/ redux form components here)

-RegisterForm.js: Refer to Garret’s example of React-Bookmarks

-SignInForm.js

src\components\pages (individual components)

-LandingPage.js

-NotFoundPage.js

-RegisterPage.js: Refer to Garret’s example of React-Bookmarks

-SignInPage.js

-AdminDashboard.js

-UserDashboard.js

src\components\shared (reusable components)

-NavBar.js

-Footer.js

-FilePath.js

src\reducers

-index.js

-auth_reducer.js (example)

src\App.js

src\index.js

src\store.js

---

### 4. Set up redux

---

### 6. Project Management: distribute components based on complexity and priority

- Branch out based on features and setup branch names in certain format, e.g. ellie-navbar, robbie-footer

---

### 7. Work on reusable components

- Top navbar
- Footer
- File path (e.g. Project 1 > Building B > Level 5 > Apt 301)

---

### 8. Work on individual components

- Landing page
- Sign up form
- Sign in form
- 3-card-column (projects, buildings)
- Create apartments
- Manage users
