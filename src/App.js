import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import FirstScreen from "./screens/FirstScreen"
import SecondScreen from "./screens/SecondScreen"
import UiKit from "./screens/UiKit"
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
            <Route
              path="*"
              element={
                <h1 className="text-white mx-auto text-[102px] mt-[200px]">
                  Not Found
                </h1>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
