import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'
import { useNavigate } from 'react-router-dom'

function App(props) {
  const navigate  = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map(repository => {
          repositoriesName.push(repository.name);
          return (repositories);
        });

        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName));
        setErro(false);
        navigate('./repositories');
      })
      .catch(erro => {
        setErro(true);
      });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input
          className="usuarioInput"
          placeholder="Usuário"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
        />
        <S.Button type="button" onClick={handlePesquisa}>
          Pesquisar
        </S.Button>
      </S.Content>
      {erro ? (
        <S.ErrorMessage>
          Ocorreu um erro, verifique se o nome do usuário está correto e tente
          novamente.
        </S.ErrorMessage> ) : ('')}
    </S.HomeContainer>
  );
}

export default App
