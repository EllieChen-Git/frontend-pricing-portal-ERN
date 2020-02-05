# README

# MERN Project - Russian Revolution (Robbie, Nina & Ellie)

#### Links

- **Deployed Website**:

- **GitHub repository Frontend**: https://github.com/EllieChen-Git/frontend-pricing-portal-ERN

- **GitHub repository Backend**: https://github.com/INRokh/backend-pricing-portal-ERN

- **Trello Board for Project Management (Whole Project)**: https://trello.com/b/0v9PguSo/mern-project-russian-revolution

- **Trello Board for Implementation (Coding)**: https://trello.com/b/uaooTZA0/russian-revolution-implementataion-coding

## [R1] Website Description

### Purpose

The purpose of our software is to allow the accurate manual image annotation of property features within apartment floor plans, in order to more effectively evaluate apartment pricing. In the future, this will also allow our client to incorporate this project with computer vision and machine learning.

---

### Functionality/Features

**1. Image Annotation** - Users will be able to tag certain features of an image using one or more tags. The data will automatically be saved to the database every time a user modifies a tag. The user will be able to indicate when the annotation of an image is finished through saving the amended image(all the tags are placed). After submitting the image, the user will be unable to modify their tags.

**2. Tag Management and Search** - Users will be able to search from existing tags, create new tags and modify tags through the use of image annotation. Tags are globally accessible to users across the system.

**3. Role-based authentication** - Users have access to different elements of the application based on their roles (admin or regular users) and basic Access Control Lists (ACLs).

**4. Annotation Review** - Users will be able to review annotation results, and mark annotations as incorrect and request re-annotation.

**5. Image Flow Management** - Users will be able to organise images hierarchically through the system (e.g. Project->Building->Floor).

**6. Image Metadata Management** - Users will be able to upload a CSV document, which contains metadata of an image (including image URLs). They will also be able to add additional metadata to this document through manually adding key and value pairs.

**7. Image Navigation** - Users will be able to zoom in and out the image and to drag it.

---

### Target Audience

The target audience for our application is our client Skychute and professionals within the real estate industry. Another group of our target audience is other developers who are interested in image annotation techniques.

---

### Tech Stack

**Application and Data**

- **JavaScript**: A high-level, just-in-time compiled, multi-paradigm programming language that conforms to the ECMAScript specification.
- **React**: A JavaScript library for building user interfaces.
- **MongoDB**: A cross-platform document-oriented (non-relational) database program.
- **Express**: A web application framework for Node.js.
- **Node**: An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.
- **Amazon S3**: A service offered by Amazon Web Services that provides object storage through a web service interface.
- **SASS**: A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
- **HTML5**: A software solution stack that defines the properties and behaviours of web page content by implementing a markup-based pattern to it.
- **CSS3**: A style sheet language used for describing the presentation of a document written in a markup language like HTML.

**Utilities**

- **Balsamiq**: A mockup tool for wireframing.
- **Trello**: A web-based Kanban-style list-making application.
- **Pinterest**: A tool to store images for ideas of mood board.

**Developer Operations**

- **GIT**: A free and open version control system.
- **GitHub**: A platform for source control.
- **GitKraken**: A Git GUI client for Windows, Mac and Linux. It helps developers become more productive and efficient with Git.
- **Heroku**: A platform for deploying our application.
- **JEST**: A delightful JavaScript Testing Framework with a focus on simplicity.

**Business Tools**

- **Slack**: A cloud-based proprietary instant messaging platform for communication within team and with client.
- **Google Docs**: A tool for documentation collaboration.

---
**Dependencies**

***Frontend***
 
- **"@testing-library/jest-dom": "^4.2.4”**: A Javascript testing framework designed to ensure correctness of our Javascript codebase.

- **"@testing-library/react": "^9.4.0”**: a lightweight solution for testing react components.

- **"@testing-library/user-event": "^7.2.1”**:tries to simulate the real events that would happen in the browser as the user interacts with it. 
 



"axios": "^0.19.1”, - A promise based HTTP client similar to the Fetch API. 

"bootstrap": "^4.4.1”,- An open source toolkit for developing with HTML, CSS and JS. 

"bootswatch": "^4.4.1”,- An open source resource for Bootstrap themes. 

"jquery": "^3.4.1”,- A fast, feature-rich JavaScript library which makes Javascript easier to use. 

"popper.js": "^1.16.1”,- a positioning engine. It cacluatates the position of an element to make it possible to position it near a given reference element. 

"react": "^16.12.0”,- Javascript library created by Facebook. Used for building UI components. 
"react-bootstrap": "^1.0.0-beta.16”,- Predefined styling for react components. 

"react-dom": "^16.12.0”,-A package that provides DOM specific methods that can be used in a web application to enable the management of DOM elements in a web page. 

"react-redux": "^7.1.3”,- the offical Redux UI binding library for REACT. 

"react-router-dom": "^5.1.2”,-A package that enables for routing within our REACT application. 

"react-scripts": "3.3.0”,- a set of scripts that allow us to begin projects without the need for additional configuration. 

"redux": "^4.0.5”,- a package that allow one to write applications that behave consistently, run in different environments and are easy to test. Also manage state! 

"redux-form": "^8.2.6”,-A package that helps manage state in the creation of forms. 

"redux-thunk": "^2.3.0”- redux middleware.

#### Dev Dependencies

"cypress": "^3.8.3”- A package that enables the testing of various features within our applications. 

### Backend 

#### Dependencies 

"aws-sdk": "^2.607.0”,- The SDK helps take the complexity out of coding by providing JavaScript objects for AWS services including Amazon S3, Amazon EC2, DynamoDB, and Amazon SWF. 

"celebrate": "^11.0.1”- celebrate is an express middleware function that wraps the Job validation library. This allows you to use this middleware in any single route, or globally, and ensure that all of your inputs are correct before any handler function.

"cors": "^2.8.5”- Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin. A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, or port) from its own.

"dotenv": "^8.2.0”- Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

"express": "^4.17.1”- Fast, unopinionated, minimalist web framework for node.

"jsonwebtoken": “^8.5.1- JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.  The claims in a JWT  are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

"local": "^0.3.3”- local-npm is a Node server that acts as a local npm registry. It serves modules, caches them, and updates them whenever they change.

"mongoose": "^5.8.7”- Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

"morgan": "^1.9.1”- HTTP request logger middleware for node.js

"multer": "^1.4.2”- Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

"multer-s3": "^2.9.0”- Streaming multer storage engine for AWS S3.

"passport": "^0.4.1”- Passport is Express-compatible authentication middleware for Node.js. Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies.

"passport-jwt": "^4.0.0”- A Passport strategy for authenticating with a JSON Web Token.

"passport-local": "^1.0.0”- Passport strategy for authenticating with a username and password.

"passport-local-mongoose": "^6.0.1”- Passport-Local Mongoose is a Mongoose plugin that simplifies building username and password login with Passport.

"uuid": "^3.4.0”-  image name on S3 

#### Dev Dependencies 

"forever": "^2.0.0”- A simple CLI tool for ensuring that a given node script runs continuously (i.e. forever)

"nodemon": "^2.0.2”-  Simple monitor script for use during development of a node.js app.

"jest": "^25.1.0”- Complete and ready to set-up JavaScript testing solution. Works out of the box for any React project.

 "supertest": "^4.0.2”- HTTP assertions made easy via superagent.






## [R2] Dataflow Diagram

- **Logical dataflow diagram Level 0**: An overview of the whole system.

![Level_0](./diagrams/DFD_Level_0.png)

- **Logical dataflow diagram Level 1**: A more detailed breakdown of the Context Level Diagram (Level 0).

![Level_1_Legend](./diagrams/DFD_Level_1_Legend.png)
![Level_1_Users](./diagrams/DFD_Level_1_User.png)
![Level_1_Admin](./diagrams/DFD_Level_1_Admin.png)
![Level_1_Export](./diagrams/DFD_Level_1_Export.png)

---

## [R3] Application Architecture Diagram

![AAD](./diagrams/AAD.png)

---

## [R4] User Stories

### [Draft Version]

**Admins**

- Can create projects -> create buildings -> apt (with description: .csv) -> upload floor plan images to different buildings
- Admin can assign projects or buildings to regular users
- Can add, view, update and delete floor plans (full CRUD resources)
- Can add, view, update and delete regular users (full CRUD resources)
- Can review the tagged floor plans submitted by regular users and, if needed, reverse the status of the tagged floor plans (from ‘completed’ back to ‘editable’), so that users can edit it again.

**Regular Users**

- Can tag property features on the floor plans (tags are CRUD resources, i.e. users can create, read, remove and delete tags)
- Can save the tagged floor plan multiple times before the final submission. After users submit the tagged plan, it will be further checked by the admin user. Regular users CANNOT change the tagged floor plan after submission.

### [Final Version]

**ALL USERS**

- **Angel**: As a user, I would like to sign-up for an account, so I can log into my account on the website later.
- **Jurra**: As a user, I would like to log into my existing account, so I can use the functionalities provided by the website.
- **Tom**: As a user, I would like to browse the website on my mobile, computer and my tablet, so I can use this application on different devices.
- **Ellie**: As a user, I would like to sign-out from the website, so my account is more secure.

**ADMINS**

- **Nina**: As the CEO of Skychute, I would like to organise images in a certain structure, so it is easier for our company to maintain the data.
- **Mark**: As a developer at Skychute, I would like to grant some users admin access, so we can have more admin users to manage our projects.
- **Robbie**: As a Project Manager at Skychute, I would like to assign projects and buildings to regular users, so users can tag the features on the floor plan images.
- **Elliot**: As a Project Manager at a construction company, I would like to add, view, update and delete projects.
- **Wayne**: As a Project Manager at Skychute, I would like to add, view, update and delete buildings.
- **Alex**: As a Project Manager at a construction company, I would like to add, view, update and delete apartments.
- **Prad**: As a Project Manager at Skychute, I would like to upload floor plan images and enter apartment information to apartments.
- **Ragan**: As a Project Manager at Skychute, I would like to review tagged floor plans submitted by regular users, so I can manage the project progress.
- **Dale**: As a Project Manager at Skychute, I would like to have the ability to reverse the status tagged floor plans (from ‘completed’ back to ‘editable’), so users can edit it again.

**Regular Users**

- **Luke**: As a Property Valuer, I would like to tag the property features on the floor plans, so I can better evaluate the property price.
- **Chelsea**: As a Real Estate Agent, I would like to create, read, remove and delete tags, so I can manage the tags as I wish.
- **Max**: As a Real Estate Agent, I would like to save the tagged plans multiple times before submission, so I can go on a coffee break and come back to the image I am working on.

## [R5] Wireframes

- **All Users** - Landing Page
  ![Landing](./wireframe/1_landing.JPG)

- **All Users** - Register Account
  ![Register](./wireframe/2_Register.JPG)

- **All Users** - Landing Page
  ![Sign-In](./wireframe/3_Sign-In.JPG)

- **Admin** - Create Projects
  ![Create_Projects](./wireframe/4_Create_Projects.JPG)

- **Admin** - Create Buildings

![Create_Buildings](./wireframe/5_Create_Buildings.JPG)

- **Admin** - Create Apartments
  ![Create_Projects](./wireframe/6_Create_Apartments.JPG)

- **Admin** - Manage Users
  ![Create_Projects](./wireframe/7_Manage_Users.JPG)

- **Users** - User Dashboard
  ![Create_Projects](./wireframe/8_User_Dashboard.JPG)

- **Users** - User Buildings
  ![Create_Projects](./wireframe/9_User_Buildings.JPG)

- **Users** - User Dashboard
  ![Create_Projects](./wireframe/10_User_Image_Annotation.JPG)

## [R6] Screenshots of Trello board

- **Project Management** - Day 1
  ![Create_Projects](./trello/PM_Day_1.png)

- **Project Management** - Day 1 (example of update)
  ![Create_Projects](./trello/PM_Day_1_example.png)

- **Project Management** - Day 2

![Create_Projects](./trello/PM_Day_2.png)

- **Project Management** - Day 4

![Create_Projects](./trello/PM_Day_4.png)

- **Project Management** - Day 5

![Create_Projects](./trello/PM_Day_5.png)

- **Implementation (Coding)** - Day 1

![Create_Projects](./trello/Coding_Day1.png)

