import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: "todoList",
    initialState: [
        { id: 1, title: "Learn React", completed: false, priority: "High" },
        { id: 2, title: "Learn Redux", completed: false, priority: "Medium" },
        { id: 3, title: "Build a Todo App", completed: false, priority: "Low" },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id == action.payload)
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})