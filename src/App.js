import "./App.css";
import Body from "./components/Body/Body";
import Header from './components/Header/Header'
function App() {
  return (
    <div className="App h-[100vh] flex flex-col justify-between ">
      <Header />
      <Body />
    </div>
  );
}

export default App;
