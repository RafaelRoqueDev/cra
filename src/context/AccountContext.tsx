/* (1 - Criando estado global com Context API)

  Objetivo: Vamos criar um contexto global para
  gerenciar o saldo da conta. A Context API, permite
  compartilhar dados entre componentes sem a necessidade
  de passar props manualmente.

  (2 - Utilizando o Contexto)

  Objetivo: Introduzir a Context API e o conceito de estado global,
  permitindo que qualquer componente filho acesse e adicione.
*/

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import MockAccounts from '../mock/MockAccounts';

interface Account {
  id: number;
  name: string;
  balance: number;
}

interface AccountContextData {
  accounts: Account[];
  addAccount: ( account: Account ) => void;
}


const AccountContext = createContext<AccountContextData | undefined>(undefined);

export const AccountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const addAccount = (account: Account) => {
    setAccounts((prevAccounts) => [...prevAccounts, account]);
  };

  useEffect(() => {
    const mockAccount = MockAccounts.accounts;
    setAccounts(mockAccount);
  }, [])

  return (
    <AccountContext.Provider value={{ accounts, addAccount}}>
      { children }
    </AccountContext.Provider>
  )
};

export const useAccountContext = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error('useAccountContext must be used within an AccountProvider');
  }
  return context;
};
