import Navbar from "./components/Navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola mundo!" />
    </div>
  );
}
export default App;