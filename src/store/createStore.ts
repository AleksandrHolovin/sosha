import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    Persistor,
} from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './slices/root.reducer';


type CreateStore = {
    store: Store;
    persistor: Persistor;
};

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const persistedSlice = persistReducer(persistConfig, rootReducer(history));

const createStore = (): CreateStore => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: persistedSlice,
        middleware: [
            sagaMiddleware,
            routerMiddleware(history),
            ...getDefaultMiddleware({
                thunk: false,
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
        ],
    });

    const persistor = persistStore(store);

    return { store, persistor };
};

export default createStore;
