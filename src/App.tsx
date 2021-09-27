import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styled/global";

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
    <>
      <Header onOpenNewTrasactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />


      <Modal 
       isOpen={isNewTransactionsModalOpen} 
       onRequestClose={handleCloseNewTransactionModal}
        >
       <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}