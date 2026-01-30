import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from "./components/Body"
import { Provider } from 'react-redux'
import appStore from './utils/store/appStore'

function App(){
    return(
        <Provider store={appStore}>
            <Body/>
        </Provider>
    )
}

const root=createRoot(document.getElementById('root'))
root.render(App())
