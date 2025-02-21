import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const setAppTheme = () => {
  const appTheme = localStorage.getItem('theme');

  if (appTheme == undefined) {
    localStorage.setItem('theme', 'light');
  } else {
    document.getElementById('root')?.classList.add(appTheme);
  }
}

setAppTheme()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
