import { render, screen } from "@testing-library/react";
import RestroDetails from "../../components/RestroDetails";
import RestroDetailData from "../MockData/RestroDetailData.json"
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"

jest.mock("react-router", () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({
    resId: "186159"
  })
}))

jest.mock("../../utils/useFetchRestroDetails.js", () => jest.fn())

import useFetchRestroDetails from "../../utils/useFetchRestroDetails"

describe("should load Restro Detail with data", () => {
  useFetchRestroDetails.mockReturnValue(RestroDetailData)

  it("should load RestroDetails component that contain home", () => {
    render(
      <BrowserRouter>
        <RestroDetails/>
      </BrowserRouter>
    )
    
    let breadcrumbtextHome = screen.getByText(/home/i)
    expect(breadcrumbtextHome).toBeInTheDocument()
  })

  it("should load RestroDetails component that contain city", async () => {
    render(
      <BrowserRouter>
        <RestroDetails/>
      </BrowserRouter>
    )
    
    expect(await screen.findByText(/Mumbai/i)).toBeInTheDocument();

    expect(await screen.findByTestId("restro-name")).toHaveTextContent("The Biryani Life")
  })
})

