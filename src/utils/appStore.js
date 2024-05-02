import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import movieReducer from './movieSlice.js';
import gptReducer from './gptSlice.js';


const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
    }

    }
);

export default appStore;