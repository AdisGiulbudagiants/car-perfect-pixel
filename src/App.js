import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import FirstScreen from "./screens/FirstScreen"
import SecondScreen from "./screens/SecondScreen"
import UiKit from "./screens/UiKit"
import NotFound from "./screens/NotFound"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<FirstScreen />} />
            <Route path="services" element={<SecondScreen />} />
            <Route path="price" element={<UiKit />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
