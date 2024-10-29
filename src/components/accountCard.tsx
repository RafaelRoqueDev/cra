/*
  Criando o primeiro componente: AccountCard

  Esse componente exibirá uma "conta" simples, com nome e saldo
  Vamos entender a estrutura básica de um componente em 
  React e como tipá-lo com TypeScript.
*/

import React from 'react';

interface AccountCardProps {
  name: string;
  balance: number;
}

const AccountCard: React.FC<AccountCardProps> = ({ name, balance }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Saldo: R$ {balance.toFixed(2)}</p>
    </div>
  );
};

export default AccountCard;
