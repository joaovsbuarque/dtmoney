import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styled/global";
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal () {
      setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionModal () {
      setIsNewTransactionsModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTrasactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

    <NewTransactionModal 
      isOpen={isNewTransactionsModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    />

      <GlobalStyle />
    </TransactionsProvider>
  );
}