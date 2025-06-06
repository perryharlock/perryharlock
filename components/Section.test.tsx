import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Section } from "./Section";

describe("Section", () => {
  it("renders the title in an h3", () => {
    render(
      <Section title="Test Title">
        <div>Child Content</div>
      </Section>
    );
    const heading = screen.getByRole("heading", { level: 3, name: /test title/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    render(
      <Section title="Section Title">
        <span data-testid="child">Hello Child</span>
      </Section>
    );
    expect(screen.getByTestId("child")).toHaveTextContent("Hello Child");
  });

  it("applies the id prop to the section", () => {
    render(
      <Section title="With ID" id="section-id">
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId("section");
    expect(section).toHaveAttribute("id", "section-id");
  });

  it("applies custom classNames to the section", () => {
    render(
      <Section title="With Class" classNames="custom-class">
        <div>Content</div>
      </Section>
    );
    const section = screen.getByTestId("section");
    expect(section).toHaveClass("custom-class");
  });
});
