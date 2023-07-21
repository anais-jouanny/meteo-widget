import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeleteCityInput from "../DeleteCityInput";

describe("Delete City Input", () => {
  it("should execute callback when clicking on the delete button", async () => {
    // ARRANGE
    const handleClick = jest.fn();
    render(<DeleteCityInput city="paris" onClick={handleClick} />);

    // ACT
    await userEvent.click(
      screen.getByRole("button", { name: /supprimer paris de la liste/i })
    );

    // ASSERT
    expect(handleClick).toHaveBeenCalledWith("paris");
  });
});
