type Props = {
  state: {
    value: number;
  };
  action: {
    type: string;
    payload: number;
  };
};

const initialValue = 0;

const rootReducer = ({ state, action }: Props) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: (state.value || 0) + action.payload,
      };
  }
};

const INCREAMENT = {
    type: "todoList/Increament",
    payload: 1,
}

const uncreamentCreator = (value: number) => {
    return {
        type: "todoList/uncreamentCreator",
        payload: value,
    }
}
