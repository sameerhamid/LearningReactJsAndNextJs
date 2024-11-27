import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders hello world as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorld = screen.getByText("Hello world!", { exact: false });
    expect(helloWorld).toBeInTheDocument();
  });

  test("render good to see you if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });

    expect(outputElement).toBeInTheDocument();
  });

  test("render 'Changed' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElt = screen.getByRole("button");
    userEvent.click(buttonElt);

    // Assert
    const buttonElement = screen.getByText("Changed");
    expect(buttonElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElt = screen.getByRole("button");
    userEvent.click(buttonElt);

    // Assert
    const buttonElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(buttonElement).toBeNull();
  });
});
