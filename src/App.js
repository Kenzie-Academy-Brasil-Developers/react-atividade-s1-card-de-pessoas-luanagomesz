import logo from "./logo.svg";
import "./App.css";

import PersonCard from "./components/developer";
function App() {
  const data = {
    Luana: {
      name: "Luana",
      age: "21",
      country: "Brasil",
    },
    Gabriel: {
      name: "Gabriel Araújo",
      age: "20",
      country: "Brasil",
    },
    Pedro: {
      name: "Pedro",
      age: "25",
      country: "Brasil",
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <PersonCard props={data.Luana} />
        <PersonCard props={data.Gabriel} />
        <PersonCard props={data.Pedro} />
      </header>
    </div>
  );
}

export default App;
