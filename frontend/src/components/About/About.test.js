// About.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";
import '@testing-library/jest-dom';

// Mock all child components used inside About.js
jest.mock("./AboutCard", () => () => <div data-testid="about-card">About Card</div>);
jest.mock("./Techstack", () => () => <div data-testid="tech-stack">Tech Stack</div>);
jest.mock("./Toolstack", () => () => <div data-testid="tool-stack">Tool Stack</div>);
jest.mock("./Github", () => () => <div data-testid="github">GitHub Component</div>);
jest.mock("../Particle", () => () => <div data-testid="particle">Particle Component</div>);

describe("About Component", () => {
  test("renders heading", () => {
    render(<About />);
    expect(screen.getByText(/know who/i)).toBeInTheDocument();
  });

  test("renders about image", () => {
    render(<About />);
    const img = screen.getByAltText("about");
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass("img-fluid");
  });

  test("renders AboutCard, Techstack, Toolstack, Github", () => {
    render(<About />);
    expect(screen.getByTestId("about-card")).toBeInTheDocument();
    expect(screen.getByTestId("tech-stack")).toBeInTheDocument();
    expect(screen.getByTestId("tool-stack")).toBeInTheDocument();
    expect(screen.getByTestId("github")).toBeInTheDocument();
  });

  test("renders Particle component", () => {
    render(<About />);
    expect(screen.getByTestId("particle")).toBeInTheDocument();
  });
});
