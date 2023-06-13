import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AllPages from "./AllPages";
import Academy from "./pages/academy/Academy";
import NotFound from "./NotFound";

function Routing (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<AllPages/>}/>
                <Route path="/academy" element={<Academy/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    );
}

export default Routing