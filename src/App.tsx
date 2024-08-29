import { useEffect } from "react";
import "./App.css";
import QuestionsPage from "./pages/QuestionsPage";
import Cookies from "js-cookie";
import md5 from "md5";

function App() {
  useEffect(() => {
    const a = [window.navigator.userAgent];
    Cookies.set("u", md5(JSON.stringify(a)));
  }, []);

  return (
    <div className="App">
      <QuestionsPage />
    </div>
  );
}

export default App;
