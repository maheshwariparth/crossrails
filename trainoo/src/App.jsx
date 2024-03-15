import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SearchHeader from './components/SearchHeader';
import DisplayTable from './components/DisplayTable';

const App = () => {
  return (
    <div>
      <h1 className="font-bold m-2 p-2">CrossRails</h1>
      <SearchHeader/>
      <div className="row">
        <div className="filters col-3 bg-primary-subtle py-3 m-4 justify-content-center text-center">
          filters
        </div>
        <DisplayTable/>
      </div>
    </div>
  );
}

export default App;