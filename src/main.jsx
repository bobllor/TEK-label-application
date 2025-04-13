import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TicketProvider } from './context/TicketContext.jsx'
import { SettingsProvider } from './context/SettingsContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BrowserRouter } from 'react-router'
import { AlertsProvider } from './context/AlertsContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TicketProvider>
      <ThemeProvider>
        <SettingsProvider>
          <AlertsProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AlertsProvider>
        </SettingsProvider>
      </ThemeProvider>
    </TicketProvider>
  </StrictMode>,
)
