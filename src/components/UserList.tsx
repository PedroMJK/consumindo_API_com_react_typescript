"use client"

import React, { useEffect, useState } from 'react';

// Tipo para os dados do usuário
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserList: React.FC = () => {
  // useState para armazenar os dados dos usuários
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect para buscar os dados quando o componente for montado
  useEffect(() => {
    // Função que faz a requisição
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data); // Atualiza o estado com os usuários recebidos
      } catch (error) {
        setError('Erro ao buscar dados'); // Define uma mensagem de erro
      } finally {
        setLoading(false); // Indica que o carregamento terminou
      }
    };

    fetchUsers();
  }, []); // O array vazio [] indica que a requisição ocorre apenas uma vez

  // Retorna o JSX para renderizar na tela
  if (loading) return <p>Carregando...</p>; // Exibe uma mensagem enquanto os dados são carregados
  if (error) return <p>{error}</p>; // Exibe uma mensagem de erro, se houver

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username}) - {user.email}
          </li>
        ))}
      </ul>   
    </div>
  );
};

export default UserList;
