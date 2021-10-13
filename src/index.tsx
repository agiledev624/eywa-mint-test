import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './fonts/Rubik-Regular.ttf'
import { useLocalStore } from 'mobx-react-lite'
import { createStore, Store } from './stores/store'

const StoreContext = React.createContext<Store | null>(null)

export const StoreProvider = ({ children }: any) => {
  const store = useLocalStore(createStore)
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(StoreContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return store
}

ReactDOM.render(
  // <React.StrictMode>
  <StoreProvider>
    <App />
  </StoreProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
