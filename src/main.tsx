import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Temporarily opts out of strict mode
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);
