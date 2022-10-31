import "./app.scss";
import { Slider } from "./components/Slider/Slider";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Slider />
    </div>
  );
};
