import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPages from "./AllPages";
import NotFound from "./NotFound";
import App from "./pages/app/App";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="/app" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Routing;
