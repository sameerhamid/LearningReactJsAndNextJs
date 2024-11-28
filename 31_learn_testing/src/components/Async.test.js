import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    // Arrange
    render(<Async />);
    // Act
    // ...nothing
    // Assert
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    const posts = await screen.findAllByRole("listitem", {}, { timeout: 1000 });
    expect(posts).not.toHaveLength(0);
  });
});
