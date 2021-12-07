import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { ApolloProvider } from "@apollo/client";
import GlobalContext from "./context/global-context";
import PetsContext from "./context/reducer";
import theme from "./theme";
import client from "./client";
import Homepage from "./pages/Homepage";
import Detail from "./pages/Details";
import MyPokemon from "./pages/MyPokemon";

const App: React.FC = () => {
  const { petsList, petsAdd, petsRemove } = PetsContext();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider
          value={{
            pets: petsList,
            onSelectPets: petsAdd,
            onRemovePets: petsRemove,
          }}
        >
          <BrowserRouter>
            <Switch>
              <Route path="/pokemon" component={Homepage} exact />
              <Route path="/pokemon/:name" component={Detail} exact />
              <Route path="/pokemon/:name/:id" component={Detail} exact />
              <Route path="/my-pokemon" component={MyPokemon} exact />
              <Route exact path="/" render={() => <Redirect to="/pokemon" />} />
            </Switch>
          </BrowserRouter>
        </GlobalContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
