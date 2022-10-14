import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

const todos = [
    {
        id: 1,
        content: "learn HTML",
        date: "2019-05-30T17:30:31.098Z",
        completed: true,
    },
    {
        id: 2,
        content: "learn JS",
        date: "2019-05-30T18:39:34.091Z",
        completed: false,
    },
    {
        id: 3,
        content: "learn HTTP",
        date: "2019-05-30T19:20:14.298Z",
        completed: false,
    },
]

ReactDOM.createRoot(document.getElementById("root")).render(
    <App todos={todos} />
)
