import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

// mock fetch API call
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ result: 5.42 }),
  })
);

describe("App component", () => {
  test("renders the calculator interface", () => {
    render(<App />);

    // check if elements are rendered correctly
    expect(screen.getByLabelText(/First number/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Second number/)).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
    expect(screen.getByText("Subtract")).toBeInTheDocument();
    expect(screen.getByText(/Result/)).toBeInTheDocument();
  });

  test("calculates addition correctly", async () => {
    render(<App />);

    const num1Input = screen.getByLabelText(/First number/);
    const num2Input = screen.getByLabelText(/Second number/);
    const addButton = screen.getByText("Add");

    fireEvent.change(num1Input, { target: { value: 2.21 } });
    fireEvent.change(num2Input, { target: { value: 3.21 } });

    // click add button
    fireEvent.click(addButton);
    await expect(fetch).toHaveBeenCalledTimes(1);
  });
});
