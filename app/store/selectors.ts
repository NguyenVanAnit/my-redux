// export const todoListSelector = (state: any) => {
//     const totalRemaining = state?.todoList?.filter((todo: any) => todo?.title?.includes(state?.filter?.search));
//     return totalRemaining || [];
// };

import { createSelector } from "@reduxjs/toolkit";

export const filterSelector = (state: any) => state?.filters || {};
export const todoListSelector = (state: any) => state?.todoList?.todos || [];

export const rootSelector = createSelector(
  filterSelector,
  todoListSelector,
  (filters, todoList) => {
    // const {search, status, priorities} = filters;
    // console.log('search', filters);
    console.log("todoList", todoList);
    return todoList.filter((todo: any) => {
      const searchText = filters?.search?.toLowerCase?.() || "";
      return todo?.title?.toLowerCase?.().includes(searchText);
    });
  }
);
