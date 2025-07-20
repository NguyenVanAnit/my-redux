// import { createStore } from "redux";
// import rootReducer from "~/store/reducer";

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit"
import { filtersSlice } from "~/store/slice/filterSlice";
import { todoSlice } from "~/store/slice/todoSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoSlice.reducer,
    }
});

export default store;