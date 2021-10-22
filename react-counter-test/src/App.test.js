import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(0);
});

test("when the plus-btn is pressed, the counter changes to 1", () => {
  render(<App />);
  const plusBtnEl = screen.getByTestId("plus-btn");
  fireEvent.click(plusBtnEl);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(1);
});

test("on-off btn has a blue color", () => {
  render(<App />);
  const onOffBtnEl = screen.getByTestId("on-off-btn");
  expect(onOffBtnEl).toHaveStyle({ backgroundColor: "blue" });
});

test("prevent the plus and minus btn from being pressed when the on-off-btn is clicked", () => {
  render(<App />);
  const onOffBtnEl = screen.getByTestId("on-off-btn");
  fireEvent.click(onOffBtnEl);
  const plusBtnEl = screen.getByTestId("plus-btn");
  expect(plusBtnEl).toBeDisabled();
});
