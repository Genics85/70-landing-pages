import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AllPages from "./AllPages";
import Academy from "./pages/academy/Academy";

function Routing (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<AllPages/>}/>
                <Route path="/academy" element={<Academy/>}/>
            </Routes>
        </Router>
    );
}

export default Routing