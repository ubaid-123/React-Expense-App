import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Account } from './components/Account';
import { TransactionHistory } from './components/TransactionsHistory';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/> 
      <div className="container">    
      <Balance/>
      <Account/>
      <TransactionHistory
      />
      <AddTransaction/>
      </div>


    </GlobalProvider>
  );
}

export default App;
