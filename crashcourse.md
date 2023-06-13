# What is React?
- library for building user interfaces
- often referred to as front-end framework
- runs on cliant as Single Page App but can be used in full stack such as PostgresExpressReactNode (PERN)
- Comparable to Angular and Vue

# Why use React?
- Structure view layer of app
- reusable components with their own states
- JSX - Dynamic Markup
- Interactive UIs with Virtual DOM
- Performance & Testing
- Very Popular in the industry
- Managing data, recreate state while altering data, easy for debugging etc

# What should you know first?
 - data types, var, func, loops etc
 - promises and asyncronous programming
 - array methods like for each and map
 - fetch API & making HTTP requests

 # UI Components 
 - In React, think of your UI as a bunch of seperate components

 # Components 
 - React interface is just a series of componenents, the react development process is about creating componenents and doing stuff with them
 - Functions vs Classes
 - Function componennts are more common and easier to use
 - Components return/render JSX
 - Component can also take in 'props', basically attributes <Header title etc>

 # Working with State
 - Components can have 'state' which is an object that determines how a component renders and behaves
 - 'App' or 'Global' just means that the state is available to the entire UI not just a single component
 - Prior to React 16.8, we had to use class based components, now we can use functional components with hooks

 # React Hooks 
 - These are functions that let us hook into the React state and lifescycle features from function components
 - useState - Returns a stateful value and a function to update it
 - useEffect - Perform side effects in function components