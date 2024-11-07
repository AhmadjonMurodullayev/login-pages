import { Route, Routes } from "react-router-dom";
import SingIn from "./components/sing-in/sing-in";
import SignUp from "./components/sing-up/sing-up";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/sing-up" element={<SignUp />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes> 
    </>
  );
}

export default App;
