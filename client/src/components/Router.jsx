import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Golf from "./Golf";
import Hockey from "./Hockey";
import Profile from "./Profile";
import StickPicker from "./StickPicker";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/golf" element={<Golf />} />
        <Route path="/hockey" element={<Hockey />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/stick-picker" element={<StickPicker />} />
      </Routes>
    </>
  );
};

export default Router;
