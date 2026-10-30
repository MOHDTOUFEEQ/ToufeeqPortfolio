import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SimplePortfolio from './simple/SimplePortfolio.jsx'
import { Analytics } from "@vercel/analytics/react"

const path = window.location.pathname.replace(/\/+$/, "") || "/"
const Page = path === "/simple" ? SimplePortfolio : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
    <Analytics />
  </StrictMode>,
)
