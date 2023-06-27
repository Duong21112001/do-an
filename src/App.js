// import Banner from "./components/Banner";
import Header from "./components/Header";
import "./conmon.css"
import "./reset.css"
// import DetailProduct from "./components/Layouts/DetailProduct";

import Footer from "./components/Footer"



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePublic } from "./routes";
function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <Routes>
          {

            routePublic.map(item => {
              const Layouts = item.component
              return <Route key={item.id} element={<Layouts/> } path={`${item.path}`} />
            })

            }
            
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
