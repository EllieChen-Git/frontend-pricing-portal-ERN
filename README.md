# Proposed Workflow

---

### Overview

1. Create-react-app
2. Install npm packages
3. Set up file structure
4. Set up redux
5. After finishing all the initial set-ups above, team lead push this project to GitHub (so that team members can have a copy of code)
6. Project Management: distribute components based on complexity and priority (So that we can start working on different components)
7. Work on reusable components
8. Work on individual components

---

### 1. create-react-app

Ellie: We need to re-do this step hahahahaha. The usual way should be that we create a project using this command 'create-react-app image-annotation-frontend' and then push this project to GitHub lol (we must be too tired on Friday arvo XD)

---

### 2. Install npm packages

Ellie: Decide what npm packages we need to install

```javascript
"dependencies": {
//Set up by create-react-app
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-scripts": "3.3.0",

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
"bootstrap": "^4.4.1",
"react-bootstrap": "^1.0.0-beta.16",
"node-sass": "^4.13.0",
"normalize.css": "^8.0.1",

},
```

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

### 5. After finishing up all the initial setups above, push this project to GitHub

- So that we can start working on different components

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

---

### 7. Styling & Connect to backend

- Q: Do we do stying after finishing each component? Or do we do them all together at the end?
