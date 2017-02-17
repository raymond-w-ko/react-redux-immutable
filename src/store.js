import {createStore} from "redux";

import reducer from "./reducers/index";
import {initialState} from "./reducers/index";

export default createStore(reducer, initialState);
