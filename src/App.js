import { Layout } from "./Pages/Layout";
import "./Assets/Scss/App.scss"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Layout/>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
