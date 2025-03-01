import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const setAppTheme = () => {
  const appTheme = localStorage.getItem('theme');

  if (appTheme == undefined) {
    localStorage.setItem('theme', 'light');
  } else {
    document.getElementById('root')?.classList.remove('light');
    document.getElementById('root')?.classList.add(appTheme);
  }
}

const setViewPortHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}


window.addEventListener('resize', () => {
  setViewPortHeight()
});

setAppTheme()
setViewPortHeight()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
