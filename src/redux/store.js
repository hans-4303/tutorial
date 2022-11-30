import { configureStore } from "@reduxjs/toolkit";
/* 파일 이름과 리듀서 부를 이름을 따로 지정해서 그렇다. 주의하기 */
import numReducer from "./reducers/numReducer";

const store = configureStore({
    reducer: {
         num: numReducer
    }
});

export default store;