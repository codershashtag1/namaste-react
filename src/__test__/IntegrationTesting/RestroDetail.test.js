import { render, screen } from "@testing-library/react";
import RestroDetails from "../../components/RestroDetails";
import RestroDetailData from "../MockData/RestroDetailData.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useParams: () => ({
    resId: "186159"
  })
}))

jest.mock("../../utils/useFetchRestroDetails.js", () => jest.fn());
import useFetchRestroDetails from "../../utils/useFetchRestroDetails";


describe("Should render selectedCardDetails", () => { 
  it("should render RestroDetails component with selectedCardDetails", () => {
    useFetchRestroDetails.mockReturnValue(RestroDetailData);
    render(
      <BrowserRouter>
        <RestroDetails />
      </BrowserRouter>
    );

    const selectedCardDetail = screen.getByTestId("selected-card-details");
    expect(selectedCardDetail).toBeInTheDocument()
  });

  it("should render RestroDetails component with selectedCardDetails without data", () => {
    useFetchRestroDetails.mockReturnValue({});
    render(
      <BrowserRouter>
        <RestroDetails />
      </BrowserRouter>
    );

    const selectedCardDetail = screen.getByTestId("selected-card-details");
    expect(selectedCardDetail).toBeInTheDocument()
  })
})

describe("Should render selectedCardDetails", () => { 
  it("should render RestroDetails component with Accordian group data", () => {
    useFetchRestroDetails.mockReturnValue(RestroDetailData);
    render(
      <BrowserRouter>
        <RestroDetails />
      </BrowserRouter>
    );

    const accordianGroupCardDetail = screen.getByTestId("accordian-group-card");
    expect(accordianGroupCardDetail).toBeInTheDocument()
  });

  it("should render RestroDetails component with Accordian group data", () => {
    useFetchRestroDetails.mockReturnValue({});
    render(
      <BrowserRouter>
        <RestroDetails />
      </BrowserRouter>
    );

    const accordianGroupCardDetail = screen.getByTestId("accordian-group-card");
    expect(accordianGroupCardDetail).toBeInTheDocument()
  });
})