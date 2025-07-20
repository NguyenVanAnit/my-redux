import { createSlice } from "@reduxjs/toolkit"

export const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "All",
        priorities: []
    },
    reducers: {
        searchFilterChange: (state, action) => {
            // mutation || IMMER => imutation
            state.search = action.payload;
        }, // { type: "filters/searchFilterChange", payload: string }
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        }, // { type: "filters/statusFilterChange", payload: string }
        priorityFilterChange: (state, action) => {
            state.priorities = action.payload;
        } // { type: "filters/priorityFilterChange", payload: string[] }
    }
})