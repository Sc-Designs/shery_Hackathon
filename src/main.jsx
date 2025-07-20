import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SmoothScrollWraper from './Components/SmoothScrollWraper.jsx'
import { Provider } from 'react-redux'
import store from "./Store/store"
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={store}>
    <SmoothScrollWraper>
    <App />
    </SmoothScrollWraper>
    </Provider>
    </BrowserRouter>
)