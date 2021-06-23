import './App.css';
import TCServiceList from './components/TCServices/tcservicesList';
import AWServiceList from './components/AWServices/awservicesList';
import DBServiceList from './components/DBServices/dbservicesList';

function App() {
  return (
    <div className="App">
      <TCServiceList />
      <AWServiceList />
      <DBServiceList />
    </div>
  );
}

export default App;
