import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders hello world as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ...nothing

  // Assert
  const helloWorld = screen.getByText("Hello world!", { exact: false });
  expect(helloWorld).toBeInTheDocument();
});
