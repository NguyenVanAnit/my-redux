
export const actionCreator = (data: any) => {
    return {
        type: "todoList/addTodo",
        payload: data
    }
}

export const actionFilter = (data: string) => {
    return {
        type: "todoList/filter",
        payload: data
    }
}