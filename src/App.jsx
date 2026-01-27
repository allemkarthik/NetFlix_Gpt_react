import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from "./components/Body"

const root=createRoot(document.getElementById('root'))
root.render(<Body/>)
