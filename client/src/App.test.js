import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import PlayerCard from "./components/PlayerCard";

afterEach(rtl.cleanup);
it("renders without crashing", () => {});
it("renders elements", () => {
  const wrap = rtl.render(<App />);

  console.log(wrap.debug());
});

it("renders card information", () => {
  const wrap = rtl.render(<PlayerCard />);
  const element = wrap.queryByText(/Name/i);
  const elementOne = wrap.queryByText(/Country/i);
  const elementTwo = wrap.queryByText(/Searches/i);
  console.log(wrap.debug());

  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();

  expect(elementOne).toBeTruthy();
  expect(elementOne).toBeInTheDocument();
  expect(elementOne).toBeVisible();

  expect(elementTwo).toBeTruthy();
  expect(elementTwo).toBeInTheDocument();
  expect(elementTwo).toBeVisible();
});
