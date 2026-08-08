import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../components/SearchBar";

describe("SearchBar Component", () => {
  test("user can type in search input", async () => {
    const user = userEvent.setup();

    render(<SearchBar onSearch={() => {}} />);

    const input = screen.getByPlaceholderText("Search for movies...");

    await user.type(input, "Batman");

    expect(input).toHaveValue("Batman");
  });

  test("calls onSearch when Search button is clicked", async () => {
    const user = userEvent.setup();

    const mockSearch = jest.fn();

    render(<SearchBar onSearch={mockSearch} />);

    const input = screen.getByPlaceholderText("Search for movies...");
    const button = screen.getByRole("button", { name: /search/i });

    await user.type(input, "Batman");
    await user.click(button);

    expect(mockSearch).toHaveBeenCalledWith("Batman");
  });
});
