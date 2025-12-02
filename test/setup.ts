import "@testing-library/jest-dom";
import React from "react";
import { vi } from "vitest";

// Mock next/image to a plain img for test environment
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    const { src, alt, ...rest } = props;
    return React.createElement("img", {
      src: src?.toString?.() ?? src,
      alt,
      ...rest,
    });
  },
}));

// Provide minimal IntersectionObserver mock for JSDOM to prevent framer-motion errors in tests
class MockIntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
}

if (typeof globalThis.IntersectionObserver === "undefined") {
  // @ts-ignore
  globalThis.IntersectionObserver = MockIntersectionObserver;
}
