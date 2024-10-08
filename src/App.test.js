import { render, screen } from "@testing-library/react";
import { act } from "react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { Hero } from "./components/Home/Hero";
import { BookingForm } from "./components/Reserve/BookingForm";

test("Navigate to the reserve page when the - Reserve Table - button is clicked", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/reserve" element={<LocationDisplay />} />
      </Routes>
    </MemoryRouter>
  );
  function LocationDisplay() {
    const location = useLocation();
    return <div data-testid="location-display">{location.pathname}</div>;
  }
  const btn = screen.getByText("Reserve Table");
  act(() => {
    userEvent.click(btn);
  });
  expect(screen.getByTestId("location-display")).toHaveTextContent("/reserve");
});
test("first name is being updated when the user types into it", () => {
  render(<BookingForm />);
  const firstNameInput = screen.getByPlaceholderText("write your first name");
  act(() => {
    userEvent.type(firstNameInput, "John");
  });
  expect(firstNameInput).toHaveValue("John");
});
test("last name is being updated when the user types into it", () => {
  render(<BookingForm />);
  const lastNameInput = screen.getByPlaceholderText("write your last name");
  act(() => {
    userEvent.type(lastNameInput, "John");
  });
  expect(lastNameInput).toHaveValue("John");
});
test("email is being updated when the user types into it", () => {
  render(<BookingForm />);
  const emailInput = screen.getByPlaceholderText("email@example.com");
  act(() => {
    userEvent.type(emailInput, "mahmoudmhatim@gmail.com");
  });
  expect(emailInput).toHaveValue("mahmoudmhatim@gmail.com");
});
describe("BookingForm Component", () => {
  test("form not submitted when input is invalid", () => {
    render(<BookingForm />);

    const firstNameInput = screen.getByPlaceholderText(
      /write your first name/i
    );
    const lastNameInput = screen.getByPlaceholderText(/write your last name/i);
    const emailInput = screen.getByPlaceholderText(/email@example.com/i);
    const phoneNumber = screen.getByLabelText(/Phone number/i);

    userEvent.type(firstNameInput, "John");
    userEvent.type(lastNameInput, "John");
    userEvent.type(emailInput, "mahmoudmhatim"); // Missing '@' symbol
    userEvent.type(phoneNumber, "123456789");

    const btn = screen.getByText("Reserve A Table");
    userEvent.click(btn);
    expect(screen.getByText(/email address is invalid/i)).toBeInTheDocument();
  });
});
