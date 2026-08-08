import SearchBar from "./SearchBar";
import { expect, fn, userEvent, within } from "storybook/test";

const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default = {
  args: {
    onSearch: fn(),
  },
};

export const SearchMovie = {
  args: {
    onSearch: fn(),
  },

  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole("textbox");
    const button = canvas.getByRole("button");

    await userEvent.type(input, "Inception");
    await userEvent.click(button);

    await expect(args.onSearch).toHaveBeenCalledWith("Inception");
  },
};