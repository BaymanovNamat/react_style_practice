import Table from "./components/Table/Table";
import User from "./components/User/User";
import User2 from "./components/User2/User2";

function App() {

  return (
    <div className="App">

      <div>
        <Table/>
      </div>
      <br/> <br/> <br/>

      <div>
        <User/>
      </div>

      <br/>
      <br/>
      <br/>

      <div>
        <User2/>
      </div>
    </div>
  );
}

export default App;
