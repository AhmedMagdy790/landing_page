import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}/>
    </Routes>
  </HashRouter>,
)
