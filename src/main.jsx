import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root')

const app = (
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
)

// Production pages are prerendered (scripts/prerender.js) — hydrate them; dev server starts empty
if (rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootElement, app)
} else {
    ReactDOM.createRoot(rootElement).render(app)
}
