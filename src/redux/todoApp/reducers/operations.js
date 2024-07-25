import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO } from "../actions";

const initialState = [
    { id: 1, todo: 'Complete the daily task', completed: false },
    { id: 2, todo: 'Learn react redux concept', completed: false },
    { id: 3, todo: 'Complete the "TODO LIST" task before tomorrow evening.', completed: true },
];

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo) => todo.id !== action.payload);
            return filteredTodos;
        case UPDATE_TODO:
            let data = action.payload
            const updatedArray = [];
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;

                }

                updatedArray.push(item);
            })
            return updatedArray;

        case UPDATE_CHECKBOX:
            let todoAarry=[];
            state.map((item)=>{
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                }
                todoAarry.push(item);
            })

            return todoAarry;
        default: return state;
    }

}