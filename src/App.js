import './App.css'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className="App-main">
        <ItemListContainer greeting="en breve podrá verla" />
      </main>
    </div>
  );
}

export default App;
