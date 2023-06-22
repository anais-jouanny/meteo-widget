import HoursCard from "../HoursCard";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { saintDenis } from "./fixtures/cityweather";

describe("Hours card", () => {
  it("should display hour weather when clicking on card title", async () => {
    // ARRANGE
    render(<HoursCard cityWeather={saintDenis} />);

    // ACT
    await userEvent.click(
      screen.getByRole("heading", {
        name: /saint\-denis\- ile\-de\-france \- fr/i,
      })
    );
    // ASSERT
    expect(screen.getByText(/23h/i)).toBeInTheDocument();
  });
});
