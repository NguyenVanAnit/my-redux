const initState = {
    filter: {
        search: "",
        status: "All",
        priority: [],
    },
    todoList: [
        {id: 1, title: "Learn React", completed: false, priority: "High"},
        {id: 2, title: "Learn Redux", completed: false, priority: "Medium"},
        {id: 3, title: "Build a Todo App", completed: false, priority: "Low"},
    ]
}

const rootReducer = (state = initState, action: { type: string; payload?: any }) => {
    console.log("type ", action.type);
    console.log("payload ", action.payload);
    switch (action.type) {
        case "todoList/addTodo":
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
    }
}

export default rootReducer;