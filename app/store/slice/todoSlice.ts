import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: "todoList",
    initialState: {
        todos: [] as any,
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo: any) => todo.id == action.payload)
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
            state.status = 'idle';
        })
        .addCase(addNewTodo.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(addNewTodo.fulfilled, (state, action) => {
            console.log('abc', action, action.payload);
            state.status = 'idle';
            if (!action.payload) return;
            state.todos.push(action.payload);
        })
    }
})

// export function addTodos(todo: any) {
//     return function addTodosThunk(dispatch: any, getState: any) {
//         console.log('[thunk]', getState());
//         console.log('todos', todo);
//         //custom
//         todo.title = "viet dang hoang vao"
//         dispatch(todoSlice.actions.addTodo(todo))
//     }
// }

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch('api/todos');
    const data = await res.json();
    return data?.todos;
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (todo) => {
    const res = await fetch('api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    console.log('response new todo', res);
    const data = await res.json();
    console.log('data new todo', data);
    return data?.todos;
})