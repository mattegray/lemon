import { fireEvent, render, waitFor } from "@testing-library/react"
import { FormProvider, useForm } from 'react-hook-form';
import { ReservationForm } from "../components/reservation-form"
import { FormField } from "../components/ui/form"

describe("ReservationForm", () => {
  it("renders correctly", () => {
    const { getByText } = render(<ReservationForm />)
    expect(getByText("Date of Reservation")).toBeInTheDocument()
    expect(getByText("Time")).toBeInTheDocument()
    expect(getByText("Number of Guests")).toBeInTheDocument()
    expect(getByText("Menu")).toBeInTheDocument()
    expect(getByText("First Name")).toBeInTheDocument()
    expect(getByText("Last Name")).toBeInTheDocument()
    expect(getByText("Phone Number")).toBeInTheDocument()
  })


  it("allows form submission", async () => {
    const { getByText, getByPlaceholderText } = render(<ReservationForm />)
    fireEvent.change(getByPlaceholderText("John"), {
      target: { value: "John" },
    })
    fireEvent.change(getByPlaceholderText("Doe"), { target: { value: "Doe" } })
    fireEvent.change(getByPlaceholderText("10-1234-5678"), {
      target: { value: "10-1234-5678" },
    })
    fireEvent.click(getByText("Submit"))

  })
})
