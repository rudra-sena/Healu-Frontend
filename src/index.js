import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import { persistStore, persistReducer} from  'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'
import mainReducer from './reducers/mainReducer'
import App from './App'
import './styles/index.css'

const persistConfig = {
  key:'root',
  storage
}

const persistedReducer=persistReducer(persistConfig,mainReducer);
const store=createStore(persistedReducer);
const persistor=persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

