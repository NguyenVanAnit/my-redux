import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Provider } from "react-redux";
import store from "~/store/store";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Provider store={store}>
      <Welcome />
    </Provider>
  );
}
