/*
  *(1 - Importando e Utilizando um Componente)

  Objetivo: Entender como importar e utilizar
  um componente, passndo dados para ele através
  de props.

  * (2 - Adicionando Estado com useState)

  Objetivo: Vamos usar o useState para manipular
  o saldo da conta, simulando uma mudança no saldo.

*/


import { useState } from "react";
import AccountCard from "./components/accountCard";

const App = () => {
  const [balance, setBalance] = useState(5000);

  const handleAddFunds = () => {
    setBalance(balance + 500);
  }

  return (
    <div>
      <h1>Sitema de Gestão de Contas</h1>
      <AccountCard
        name="Conta Principal"
        balance={balance}
      />
      <button onClick={handleAddFunds}>Adicionar R$ 500</button>
    </div>
  )
};

export default App;
