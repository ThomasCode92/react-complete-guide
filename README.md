# React - Complete Guide

Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!🚀📚

## Introduction

Learn React with [this complete guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux) by starting from the basics and advancing to advanced concepts, including building multiple demo apps. Develop a fullstack application with _NextJS_ and gain a deep understanding of React Hooks, Components, and efficient State Management using Context API and Redux. Learn how to create standalone React apps as well as those connected to a backend via HTTP. Dive into routing with React Router, implement User Authentication, and explore additional concepts like Styling, Animations, Form Handling, TypeScript, and more along the way.

## How to Use this Repository

The repository is divided into two main sections: _Summary_ and _Core Features_. The _Summary_ section features a demo application showcasing key aspects of React, including Components, State Management, Routing, and HTTP requests. The _Core Features_ section consists of several smaller demo projects, each focusing on a specific topic such as Styling, Effects, Forms, and even Redux and Next.js.

To explore the _Summary_ project, check the `core-features` folder. For the other examples, visit `complete-path`. The complete list of projects can be find below.

**Getting Started**<br />
To use the projects in this repository, Node.js needs to be installed on the system. Refer to the [official documentation](https://nodejs.org/en) for installation instructions. If [asdf](https://asdf-vm.com/) is being used, Node.js can also be installed via the `.tool-versions` file. More information on this is available [here](https://asdf-vm.com/manage/configuration.html#tool-versions).

Once Node.js is installed, follow these steps to start an application:

```bash
git clone https://github.com/ThomasCode92/react-complete-guide.git
cd react-complete-guide             # navigate into project folder

## choose a project, e.g.: 'react-essentials`
cd complete-path/react-essentials   # navigate to project
npm install                         # install dependencies
npm run dev                         # start development server
```

A lot of `node_modules` folders are likely to be created. To remove them, run the `npm run cleanup` command, which recursively deletes all `node_modules` folders.

**Complete list of Core Features**

<details>
<summary>Click of Core Features</summary>
<br>

| Module                                 | Description                                                      | Resources                                                                                                                                                 |
| -------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| React Essentials                       | Basics of Components, JSX & State                                | [Folder](./complete-path/react-essentials/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/react-essentials)                     |
| React Essentials - Deep Dive           | Beyond the Basics                                                | [Folder](./complete-path/essentials-deep-dive/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/essentials-deep-dive)             |
| React Essentials - Practice Project    | Apply Knowledge & Practice Concepts                              | [Folder](./complete-path/essentials-practice/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/essentials-practice)               |
| Styling React Apps                     | Static & Dynamic Styling for Pretty Apps                         | [Folder](./complete-path/styling-components/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/styling-components)                 |
| Refs & Portals                         | Advanced DOM Access & Value Management                           | [Folder](./complete-path/refs-portals/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/refs-portals)                             |
| Practice Project: Advanced Concepts    | Working with Components, State, Styling, Refs & Portals          | [Folder](./complete-path/practice-project-1/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/practice-project-1)                 |
| Advanced State Management              | Beyond Basic Apps & “Lifting Up State”                           | [Folder](./complete-path/context-api/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/context-api)                               |
| Dealing with Side Effects              | Keeping the UI Synchronized                                      | [Folder](./complete-path/handling-side-effects/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/handling-side-effects)           |
| Practice Project: Working with Effects | Working with EffectsPractice & Dive Deeper                       | [Folder](./complete-path/practice-project-2/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/practice-project-2)                 |
| Behind The Scenes                      | Understanding & Optimizing React                                 | [Folder](./complete-path/behind-the-scenes/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/behind-the-scenes)                   |
| Data Fetching & HTTP Requests          | Sending & Receiving Data via HTTP                                | [Folder](./complete-path/data-fetching-custom-hooks/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/data-fetching-custom-hooks) |
| Custom Hooks                           | Creating & Using Custom React Hooks                              | [Folder](./complete-path/data-fetching-custom-hooks/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/data-fetching-custom-hooks) |
| Working with Forms & User Input        | It’s Trickier Than It Might Seem                                 | [Folder](./complete-path/form-user-input/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/form-user-input)                       |
| Time To Practice: Food Order App       | Components, State, Context, Effects, HTTP Requests & More!       | [Folder](./complete-path/practice-project-3/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/practice-project-3)                 |
| Understanding Redux                    | Managing App-Wide State with Redux                               | [Folder](./complete-path/redux-introduction/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/redux-introduction)                 |
| Redux Deep Dive                        | Taking a Closer Look                                             | [Folder](./complete-path/redux-advanced/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/redux-advanced)                         |
| Single-Page Application Routing        | Multiple Pages In Single-Page Apps                               | [Folder](./complete-path/routing-auth/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/routing-auth)                             |
| Authentication                         | User Signup & Login                                              | [Folder](./complete-path/routing-auth/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/routing-auth)                             |
| Data Fetching with Tanstack Query      | Sending HTTP Requests with Ease                                  | [Folder](./complete-path/tanstack-query/) - [Github](https://github.com/ThomasCode92/react-complete-guide/commits/tanstack-query)                         |
| Animating React Apps                   | Using Framer Motion to Bring Things to Life                      | [Folder](./complete-path/framer-motion/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/framer-motion)                           |
| Replacing Redux with Context & Hooks   | A Totally Optional of Reducing Dependencies                      | [Folder](./complete-path/redux-vs-context/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/redux-vs-context)                     |
| Introduction to Next.js                | Building Up On React                                             | [Folder](./complete-path/nextjs-introduction/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/nextjs-introduction)               |
| Patterns & Best Practices              | Exploring Advanced React Patterns & Repeating Key Best Practices | [Folder](./complete-path/patterns-best-practices/) - [GitHub](https://github.com/ThomasCode92/react-complete-guide/commits/patterns-best-practices)       |

</details>
