import BookList from "./components/BookList";
import Count from "./components/Count";
import Navbar from "./components/Navbar";
import NewBook from "./components/NewBook";
import BookContextProvider from "./contexts/BookContext";
import CountContextProvider from "./contexts/countContext";




function App() {
  return (
    <div className="pt-5 app">
    <CountContextProvider>
      <Count className="text-center"/>
    </CountContextProvider>
    </div>
  );
}

export default App;
