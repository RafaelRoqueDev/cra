/*
  (1 - Criando o primeiro componente: AccountCard)

  Esse componente exibirá uma "conta" simples, com nome e saldo
  Vamos entender a estrutura básica de um componente em 
  React e como tipá-lo com TypeScript.

  (2 - Usando o Encadeamento Opcional e Props Extras)

  Adicionaremos dados extras no objeto da conta e usaremos o
  encadeamento opcional para evitar erros de propriedades ausentes.
  Desta forma não irá causar erros na renderização
  caso a nova propriedade não existir;
*/

import React from 'react';

interface AccountCardProps {
  name: string;
  balance: number;
  referentials?: string[]; // nova propriedade
}

const AccountCard: React.FC<AccountCardProps> = ({ name, balance, referentials }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Saldo: R$ {balance.toFixed(2)}</p>
      <p>Referencias: {referentials?.join(', ') || 'Nenhum'}</p>
    </div>
  );
};

export default AccountCard;
