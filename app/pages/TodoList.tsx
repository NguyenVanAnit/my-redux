import { Button, Checkbox, Input, Radio, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, actionFilter } from "~/store/actions";
import { v4 as idv4 } from "uuid";
import { rootSelector, todoListSelector } from "~/store/selectors";
import Search from "antd/es/input/Search";
import { todoSlice } from "~/store/slice/todoSlice";
import { filtersSlice } from "~/store/slice/filterSlice";

type TodoListProps = {
    id: string;
    title: string;
    completed: boolean;
    priority: string;
}

export default function Filter() {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState<string | undefined>();
    const [searchText, setSearchText] = useState("");
    // const [searchPriority, setSearchPriority] = useState<string | undefined>();
    // const [searchStatus, setSearchStatus] = useState<string | undefined>();

    const dispatch = useDispatch();
    const todoList = useSelector(rootSelector);
    console.log('todoList', todoList);

    const filters = useSelector((state) => state.filters);
console.log("filters state", filters); // check có thấy search không

    const addTodo = () => {
        // Dispatch an action to add a new todo
        dispatch(todoSlice.actions.addTodo({
            id: idv4(),
            title: title || "New Task",
            completed: false,
            priority: priority || "Medium"
        }))
        console.log("Add Todo clicked");
        // Reset input fields
        setTitle("");
        setPriority("Medium");
        // Example: dispatch({ type: "todoList/addTodo", payload: { title: "New Task" } });
    }

    const handleSearch = (value: string) => {
        setSearchText(value);
        dispatch(filtersSlice.actions.searchFilterChange(value));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input placeholder="Search task" onChange={(e) => handleSearch(e.target.value)} value={searchText} />
            <Radio.Group
                options={[
                    { label: 'All', value: 'all' },
                    { label: 'Completed', value: 'completed' },
                    { label: 'Pending', value: 'pending' }
                ]}
            />
            <div>
                <Select 
                    placeholder="Filter by status"
                    mode="multiple"
                    style={{ width: '100%' }}
                    options={[
                        { label: 'Hard', value: 'Hard' },
                        { label: 'Medium', value: 'Medium' },
                        { label: 'Easy', value: 'Easy' }
                    ]}
                />
            </div>
            { todoList.map((todo: TodoListProps) => (
                <TodoList key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} priority={todo.priority} />
            ))}
            <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', marginTop: '40px' }}>
                <Input placeholder="Nhap ten task muon them" style={{ width: '100%' }} value={title} onChange={(e) => setTitle(e.target.value)} />
                <Select
                    placeholder="Select priority"
                    style={{ width: '100%' }}
                    options={[
                        { label: 'High', value: 'High' },
                        { label: 'Medium', value: 'Medium' },
                        { label: 'Low', value: 'Low' }
                    ]}
                    value={priority}
                    onChange={(value) => setPriority(value)}
                    defaultValue={"Medium"}
                />
                <Button type="primary" onClick={addTodo}>Add Todo</Button>
            </div>
        </div>
    )
}

const TodoList = ({id, title, completed, priority}: TodoListProps) => {;
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox checked={completed}>{title}</Checkbox>
            <span style={{ color: priority === "High" ? "red" : priority === "Medium" ? "orange" : "green" }}>
                {priority}
            </span>

        </div>
    )
}