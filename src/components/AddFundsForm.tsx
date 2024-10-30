/*
  (1 - Criar um componente de formulário)

  Objetivo: Vamos adicionar um componente de
  formulário para simular uma operação de
  depósito, onde o usuário pode inserir um valor.


import { useState } from "react";

interface AddFundsFormProps {
  onAddfunds: (amount: number) => void;
}

const AddFundsForm: React.FC<AddFundsFormProps> = ({onAddfunds}) => {
  const [amount, setAmount] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddfunds(amount);
    setAmount(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amountInput">Deposite aqui:</label>
      <br />
      <input
        id="amountInput"
        type="number"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <br />
      <button type="submit">Adicionar valor</button>
    </form>
  )
};
export default AddFundsForm

*/

//----------------------------------------------

import React, { useState } from 'react';
import { useAccountContext } from '../context/AccountContext';

const AddAccountForm: React.FC = () => {
  const { addAccount } = useAccountContext();
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAccount = { id: Date.now(), name, balance };
    addAccount(newAccount);
    setName('');
    setBalance(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome da Conta"
      />
      <input
        type="number"
        value={balance}
        onChange={(e) => setBalance(Number(e.target.value))}
        placeholder="Saldo Inicial"
      />
      <button type="submit">Adicionar Conta</button>
    </form>
  );
};

export default AddAccountForm;