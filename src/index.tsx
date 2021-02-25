import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { unregister } from './core';
import { GlobalStyles, theme } from './styles';
import { Content, Title, Card, Grid } from './components';
import configureStore from './core/configure-store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Provider store={configureStore()}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <Grid />
          </Card>
        </Content>
      </Provider>

    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

unregister();
