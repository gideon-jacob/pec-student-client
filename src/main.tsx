import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const setAppTheme = () => {
  const localStorageTheme = localStorage.getItem('theme');
  const rootDiv = document.getElementById('root');
  
  rootDiv?.classList.remove('light', 'dark');
  if (localStorageTheme == undefined) {
    if (prefersDarkScheme.matches) {
      rootDiv?.classList.add('dark');
    } else {
      rootDiv?.classList.add('light');
    }
  } else {
    rootDiv?.classList.add(localStorageTheme);
  }
}

const setViewPortHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('load', () => {
  setAppTheme()
  setViewPortHeight()
});

window.addEventListener('resize', () => {
  setViewPortHeight()
});

prefersDarkScheme.addEventListener('change', () => {
  setAppTheme()
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
