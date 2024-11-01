/* (1 - Criando estado global com Context API)

  Objetivo: Vamos criar um contexto global para
  gerenciar o saldo da conta. A Context API, permite
  compartilhar dados entre componentes sem a necessidade
  de passar props manualmente.

  (2 - Utilizando o Contexto)

  Objetivo: Introduzir a Context API e o conceito de estado global,
  permitindo que qualquer componente filho acesse e adicione.
*/

import { createContext, ReactNode, useContext, useState } from 'react';

// Definindo o formato de uma conta
interface Account {
  id: number;
  name: string;
  balance: number;
}

// Essa interface define o que nosso contexto vai disponibilizar
interface AccountContextData {
  accounts: Account[]; // contas
  addAccount: ( account: Account ) => void; // função para adicionar
}

// Criando o contexto, que o começo vai estar vazio
const AccountContext = createContext<AccountContextData | undefined>(undefined);

// Criando o componente que vai "ENVELOPAR" os outros e prover o contexto
export const AccountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  // Criando a função para adicionar uma conta à lista
  const addAccount = (account: Account) => {
    // Criando uma nova conta com um ID único
    setAccounts((prevAccounts) => [...prevAccounts, account]);
  };

/*  useEffect(() => {
    const mockAccount = MockAccounts.accounts;
    setAccounts(mockAccount);
  }, [])
*/
  return (
    // Passando o valor do contexto para o componente filho
    <AccountContext.Provider value={{ accounts, addAccount}}>
      {/* Renderizando os componentes filhos */ }
      { children }
    </AccountContext.Provider>
  )
};
// Função para acessar o contexto dentro dos componentes
export const useAccountContext = () => {
  // Verificando se o contexto está definido
  const context = useContext(AccountContext);
  // Se não estiver definido, lança um erro
  if (!context) {
    throw new Error('useAccountContext must be used within an AccountProvider');
  }
  return context;
};
