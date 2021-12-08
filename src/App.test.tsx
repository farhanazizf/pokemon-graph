import { render, act } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Homepage from "../src/pages/Homepage";
import Details from "../src/pages/Details";
import MyPokemon from "../src/pages/MyPokemon";

test("render homepage without crashing", async () => {
  const history = createMemoryHistory();
  const { baseElement } = render(
    <Router history={history}>
      <Homepage />
    </Router>
  );

  await act(async () => {
    expect(baseElement).toBeDefined();
  });
});

test("render details page without crashing", async () => {
  const history = createMemoryHistory();
  const { baseElement } = render(
    <Router history={history}>
      <Details />
    </Router>
  );

  await act(async () => {
    expect(baseElement).toBeDefined();
  });
});

test("render my pokemon page without crashing", async () => {
  const history = createMemoryHistory();
  const { baseElement } = render(
    <Router history={history}>
      <MyPokemon />
    </Router>
  );

  await act(async () => {
    expect(baseElement).toBeDefined();
  });
});
