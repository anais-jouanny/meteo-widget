import { render, screen } from "@testing-library/react";
import { AppContext } from "../../../context/context";
import Home from "../../../pages";
import { weather } from "../fixtures/parisWeather";
import React from "react";

describe("Home", () => {
  beforeEach(() => {
    const setStateMock = jest.fn(() => [weather]);
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
  });

  it("should display the name of a city in the context app when home is render", () => {
    render(
      <AppContext.Provider value={{ cities: ["paris"], setCities: () => {} }}>
        <Home />
      </AppContext.Provider>
    );
    console.log(screen.debug());
    expect(screen.getByText("paris")).toBeInTheDocument();
  });
});
