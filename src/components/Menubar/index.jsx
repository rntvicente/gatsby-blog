import React from 'react';
import { Home } from '@styled-icons/entypo/Home';
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt';
import { Bulb } from '@styled-icons/boxicons-regular/Bulb';
import { Grid } from '@styled-icons/boxicons-solid/Grid';


import * as Styled from './styled';


const Menubar = () => (
  <Styled.MenuBarWrapper>
    <Styled.MenuBarGroup>
      <Styled.MenuBarLink to='/' title='Voltar pra Home'>
        <Styled.MenuBarItem>
          <Home />
        </Styled.MenuBarItem>
      </Styled.MenuBarLink>

      <Styled.MenuBarLink to='/search/' title='Ir para Pesquisa'>
        <Styled.MenuBarItem>
          <Search />
        </Styled.MenuBarItem>
      </Styled.MenuBarLink>
    </Styled.MenuBarGroup>

    <Styled.MenuBarGroup>
      <Styled.MenuBarItem>
        <Bulb />
      </Styled.MenuBarItem>

      <Styled.MenuBarItem>
        <Grid />
      </Styled.MenuBarItem>

      <Styled.MenuBarItem>
        <Arrow />
      </Styled.MenuBarItem>
    </Styled.MenuBarGroup>
  </Styled.MenuBarWrapper>
);

export default Menubar;
