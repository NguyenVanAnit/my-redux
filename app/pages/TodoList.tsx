import { Button, Checkbox, Input, Radio, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import type { AppDispatch } from "~/store";
import { v4 as idv4 } from "uuid";
import { rootSelector, todoListSelector } from "~/store/selectors";
import Search from "antd/es/input/Search";
import { addNewTodo, todoSlice } from "~/store/slice/todoSlice";
import { filtersSlice } from "~/store/slice/filterSlice";
import { useTranslation } from "react-i18next";
import '~/i18n/i18n';
import { language } from "~/i18n/i18n";

type TodoListProps = {
    id: string;
    title: string;
    completed: boolean;
    priority: string;
}

export default function Filter() {
    const { i18n, t } = useTranslation([]);
    const selectedLanguage = language[i18n.language as keyof typeof language] || language.en;
    console.log('selectedLanguage', selectedLanguage);
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState<string | undefined>();
    const [searchText, setSearchText] = useState("");
    // const [searchPriority, setSearchPriority] = useState<string | undefined>();
    // const [searchStatus, setSearchStatus] = useState<string | undefined>();
    // const dispatch = useDispatch<AppDispatch>();
    const dispatch = useDispatch();
    const todoList = useSelector(rootSelector);

    const addTodo = () => {
        // Dispatch an action to add a new todo
        // dispatch(todoSlice.actions.addTodo({
        //     id: idv4(),
        //     title: title || "New Task",
        //     completed: false,
        //     priority: priority || "Medium"
        // }))
        // dispatch(addTodos({
        //     id: idv4(),
        //     title: title || "New Task",
        //     completed: false,
        //     priority: priority || "Medium"
        // }));

        dispatch(addNewTodo({
            id: idv4(),
            title: title || "New Task",
            completed: false,
            priority: priority || "Medium"
        }));

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

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Select onChange={(value) => changeLanguage(value)} value={selectedLanguage} style={{ width: '200px', marginBottom: '16px' }}>
                <Select.Option value="vi">{language.vi}</Select.Option>
                <Select.Option value="en">{language.en}</Select.Option>
            </Select>
            <Input placeholder={t('filter.search')} onChange={(e) => handleSearch(e.target.value)} value={searchText} />
            <Radio.Group
                options={[
                    { label: t('filter.all'), value: 'all' },
                    { label: t('filter.completed'), value: 'completed' },
                    { label: t('filter.pending'), value: 'pending' }
                ]}
            />
            <div>
                <Select
                    placeholder={t("add.filter_by_status")}
                    mode="multiple"
                    style={{ width: '100%' }}
                    options={[
                        { label: t('filter.hard'), value: 'Hard' },
                        { label: t('filter.medium'), value: 'Medium' },
                        { label: t('filter.easy'), value: 'Easy' }
                    ]}
                />
            </div>
            { todoList.map((todo: TodoListProps) => (
                <TodoList key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} priority={todo.priority} />
            ))}
            <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', marginTop: '40px' }}>
                <Input placeholder={t('filter.add')} style={{ width: '100%' }} value={title} onChange={(e) => setTitle(e.target.value)} />
                <Select
                    placeholder={t('add.select_priority')}
                    style={{ width: '100%' }}
                    options={[
                        { label: t('add.high'), value: 'High' },
                        { label: t('add.medium'), value: 'Medium' },
                        { label: t('add.low'), value: 'Low' }
                    ]}
                    value={priority}
                    onChange={(value) => setPriority(value)}
                    defaultValue={"Medium"}
                />
                <Button type="primary" onClick={addTodo}>{t('add.add_todo')}</Button>
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