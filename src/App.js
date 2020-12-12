import './App.css';

import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpences from './components/IncomeExpences'
import History from './components/History'
import {NewTransaction} from './components/newTransaction'

import {GlobalProvider} from  './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container">
       <Balance/>
       <IncomeExpences/>
       <History/>
       <NewTransaction/>
     </div>
   
    </GlobalProvider>

  );
}

export default App;
