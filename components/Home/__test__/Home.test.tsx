import { render, screen } from "@testing-library/react";
import { weather } from "../fixtures/parisWeather";
import Card from "../Card";

describe("Card", () => {
  it("should display the name of a city when card component is render", () => {
    render(<Card cityWeather={weather} />);

    expect(screen.getByText("paris")).toBeInTheDocument();
  });
});
