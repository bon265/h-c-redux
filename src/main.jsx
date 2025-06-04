import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import  store from './REDUX/store.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css'
import './myStyle.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
  <Router>
     <App />
  </Router>
   </Provider>
  </StrictMode>
)
