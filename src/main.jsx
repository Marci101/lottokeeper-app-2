import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { store } from "./common/store/store"
import { Provider } from "react-redux";
import "./ui/assets/style/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
);
