import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import PopularPage from "./Pages/PopularPage";
import TopRatedPage from "./Pages/TopRatedPage";
import NotFoundPage from "./Pages/NotFoundPage";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<HomePage />}></Route>
          <Route path={"/popular"} element={<PopularPage />}></Route>
          <Route path={"/toprated"} element={<TopRatedPage />}></Route>
          <Route path={"*"} element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
