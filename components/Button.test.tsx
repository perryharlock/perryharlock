import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders the link text", () => {
    render(<Button linkText="Click me" href="https://example.com" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies the provided classNames", () => {
    render(<Button linkText="Test" href="#" classNames="custom-class" />);
    const link = screen.getByRole("link");
    expect(link).toHaveClass("custom-class");
  });

  it("sets the href, target, and rel attributes", () => {
    render(<Button linkText="Go" href="https://test.com" target="_blank" rel="noopener" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://test.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener");
  });
});
