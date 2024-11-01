/*
  (1 - Criando o componente AccountList)

  Objetivo: Vamos criar um componente que exiba
  uma lista de contas. Aprender a renderizar uma lista com
  map e utilizar a propriedade key para cada item.
*/

import { useAccountContext } from "../context/AccountContext";


const AccountList: React.FC = () => {
  const { accounts } = useAccountContext(); //Obtenha a lista do contexto diretamente
  return (
    <div>
      <h2>Lista de Contas:</h2>
      {accounts.length > 0 ? (
        accounts.map((account) => (
          <div key={account.id}>
            <p>Nome: {account.name}</p>
            <p>Saldo: R${account.balance.toFixed(2)}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma conta adicionada.</p>
      )}
    </div>
  )
}

export default AccountList
