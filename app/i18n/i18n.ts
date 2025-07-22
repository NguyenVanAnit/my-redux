import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TODOLIST_EN from "~/locales/en/todoList.json";
import TODOLIST_VI from "~/locales/vi/todoList.json";

export const language = {
    en: "English",
    vi: "Tiếng Việt"
}

const resources = {
    en: {
        todoList: TODOLIST_EN
    },
    vi: {
        todoList: TODOLIST_VI
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "vi",
    ns: ["todoList"],
    fallbackLng: "vi",
    interpolation: {
        escapeValue: false
    }
})