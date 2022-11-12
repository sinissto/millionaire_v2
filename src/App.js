import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">main window</div>
      <div className="pyramid">
        <ul className="moneyList">
          <li className="moneyListItem active">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$ 400</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
