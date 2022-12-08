import "./App.css";
import HelloWorld from "./components/HelloWorld"
import SayMyName from "./components/SayMyName"
import Person from "./components/person";
import Frase from "./components/Frase"

function App() {
  const random = "SomeName"

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <HelloWorld/>
      <SayMyName nome="Gustavo"/>
      <SayMyName nome="Dede"/>
      <SayMyName nome={random}/>
      <Person 
       nome="Gustavo"
       idade="17"
       profissao="programador" 
       foto="https://via.placeholder.com/150"/>
       <Frase/>
    </div>
  );
}

export default App;
