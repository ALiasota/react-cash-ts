import {configureStore, combineReducers} from '@reduxjs/toolkit';
import airportReducer from './slices/airportSlice';
import handBookReducer from './slices/handBookSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
    airport: airportReducer,
    handBook: handBookReducer,
    auth: authReducer
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];