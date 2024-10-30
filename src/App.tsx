/*
  *(1 - Importando e Utilizando um Componente)

  Objetivo: Entender como importar e utilizar
  um componente, passndo dados para ele através
  de props.

  * (2 - Adicionando Estado com useState)

  Objetivo: Vamos usar o useState para manipular
  o saldo da conta, simulando uma mudança no saldo.

  * (3 - Adicionando o componente AddFundsForm)

  Objetivo: Vamos atualizar o saldo através do componente
  AddFundsForm. Vimos como conectar diferentes
  componentes e como passar props entre eles.

//----------------------------------------------

import { useState } from "react";
import AccountCard from "./components/AccountCard";
import AddFundsForm from "./components/AddFundsForm";

const App = () => {
  const [balance, setBalance] = useState(5000);

  const handleAddFunds = (amount: number) => {
    setBalance(balance + amount);
  }

  return (
    <div>
      <h1>Sitema de Gestão de Contas</h1>
      <AccountCard
        name="Conta Principal"
        balance={balance}
      />
      <AddFundsForm
       onAddfunds={handleAddFunds}
      />
    </div>
  )
};

export default App;

*/

//----------------------------------------------

/*
  (4 - Adicionando o Contexto na App e no AccountList)
  Objetivo: Vamos adicionar o contexto na App e no AccountList.
  Vimos como utilizar o contexto para compartilhar dados entre componentes.
  AccountList use dados global do contexto para renderizar a lista de contas.

*/


import AccountList from "./components/AccountList";
import AddAccountForm from "./components/AddFundsForm";
import { AccountProvider } from "./context/AccountContext";


const App = () => {
  return (
    <AccountProvider>
      <div style={{ padding: '20px' }}>
        <h1>Sistema de Gestão de Contas</h1>
        <AddAccountForm />
        <AccountList accounts={[]} />
      </div>
    </AccountProvider>
  )
};

export default App;