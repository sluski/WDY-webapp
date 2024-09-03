import { useEffect } from "react";
import "./App.css";
import QuestionsPage from "./pages/QuestionsPage";
import Cookies from "js-cookie";
import md5 from "md5";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FrontPage from "./pages/FrontPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontPage />,
    },
    {
      path: "/questions",
      element: <QuestionsPage />
    }
  ]);


  useEffect(() => {
    const a = [window.navigator.userAgent];
    Cookies.set("u", md5(JSON.stringify(a)));
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
