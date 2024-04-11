# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

- desktop light mode

![Screen Shot 2567-04-11 at 19 03 38](https://github.com/Wannika123/fem-todo-app/assets/142564014/1b60d680-816c-4e0c-a0ad-1b625222baba)

![Screen Shot 2567-04-11 at 19 04 06](https://github.com/Wannika123/fem-todo-app/assets/142564014/34726211-ebf2-4371-bc22-52505ffc9f28)

- mobile dark mode

![Screen Shot 2567-04-11 at 19 05 41](https://github.com/Wannika123/fem-todo-app/assets/142564014/72043687-f1e7-4b63-a88b-0fa682c9c93e)

### Links

- Solution URL: [GitHub repo](https://github.com/Wannika123/fem-todo-app)
- Live Site URL: [netlify](https://6617d109e4aa378bce0ae7b2--statuesque-ganache-0cce80.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library

### What I learned

- I understand more how React app renders. While building this challenge, I accidentally made React app render infinitely by calling `setState()` in `ComponentDidUpdate()` and in the body of a functional component.
- Somehow, when using `confirm()` in React, you have to use the full syntax: `window.confirm()`.
- I learn how to update the state that is an array. The method like `push()` that mutate an array is not going to work. Instead, it has to be a method that return a new array, e.g. `map()`.
- Somehow, when using `ComponentDidUpdate()`, you have to pass 'both' `prevProps` and `prevState` as arguments, even though you use only `prevState`.
- For the element that has an event listener, using `e.target` won't work. Instead, it has to be `e.currentTarget`.

### Useful resources

- [Example resource 1](https://github.com/SortableJS/react-sortablejs) - SortableJS in React
- [Example resource 2](https://react.dev/learn/updating-arrays-in-state) - Reference on how to update state that is an array.
- [Example resource 3](https://medium.com/@ashleywnj/componentdidupdate-prevstate-prevprops-and-a-silly-mistake-38afc72f5abc) - About `ComponentDidUpdate()`.

## Author

- Frontend Mentor - [@Wannika123](https://www.frontendmentor.io/profile/Wannika123)