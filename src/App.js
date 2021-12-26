import "./App.css";
import { Helmet } from "react-helmet";
// import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/footer";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>SinkBlink</title>
        <meta name="description" content="Saquib Hazari portfolio" />
        <meta
          name="keywords"
          content="saquib hazari, saquib hussain, portfolio saquib, saquib portfolio, hazari portfolio, Saquib Hazari, Saquib Hazari Portfolio, UI design, UX design, UI/UX, website design"
        />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
