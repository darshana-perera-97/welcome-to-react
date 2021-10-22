import Design from "./Design/Design";
import NavBar from "./Design/Commons/Layouts/NavBar";
import BottomBar from "./Design/Commons/Layouts/BottomBar";


function App() {
  return (
    <div>
      <NavBar />
      <Design />
      <BottomBar/>
    </div>
  );
}

export default App;
