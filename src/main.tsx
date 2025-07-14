// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './common/styles/App.scss';
// import App from './App.tsx'
// import UseMemo from './components/MemoHook.tsx'
// import CallbackHook from './components/CallbackHook.tsx'
// import { Padre } from './components/07-tarea-memo/Padre.tsx'
import TodoApp from './components/useReducer/TodoApp.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage.tsx';
import { About } from './Pages/About.tsx';
import { Login } from './Pages/Login.tsx';
import FirstApp from './components/Pruebas/FirstApp.tsx';
import { Cach } from './components/component-cache/Cach.tsx';
import { MemoHook } from './components/useMemo/MemoHook.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<TodoApp />} />
      <Route path="/first-app" element={<FirstApp />} />
      <Route path="/cach" element={<Cach />} />
      <Route path="/memohook" element={<MemoHook />} />
    </Routes>
    {/* <StrictMode> */}
    {/* </StrictMode>, */}
  </BrowserRouter>
)
