import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AllPages from "./AllPages";
import Academy from "./pages/academy/Academy";
import NotFound from "./NotFound";
import Agency from "./pages/agency/Agency";

function Routing (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<AllPages/>}/>
                <Route path="/academy" element={<Academy/>}/>
                <Route path="/agency" element={<Agency/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    );
}

export default Routing