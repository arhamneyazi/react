import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

function MyApp() {
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const aReactElement = React.createElement(
    "a",
    {href: "https://instagram.com", target: "_blank"},
    "Click me to visit Instagram"
)

createRoot(document.getElementById('root')).render(

    <App />

)
