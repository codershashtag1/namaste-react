import { render, screen} from "@testing-library/react";
import SelectedCardDetails from "../../components/SelectedCardDetails";
import RestroDetailData from "../MockData/RestroDetailData.json"
import RestaurantDetailContext from "../../utils/RestaurantDetailContext";
import '@testing-library/jest-dom';

describe("should render SelectedCardDetails component with data", () => { 
  beforeEach(() => {
    render(
    <RestaurantDetailContext.Provider value={RestroDetailData[2]?.card?.card?.info}>
      <SelectedCardDetails />
    </RestaurantDetailContext.Provider> 
    )
  })

  test("should render SelectedCardDetails component with name", () => {
    let name = screen.getByText("The Biryani Life");
    expect(name).toBeInTheDocument();
  })

  test("should render SelectedCardDetails component with avgRating", () => {
    let avgRating = screen.getByText(/3.8.*1.3K\+ ratings.*₹250 for two/i);
    expect(avgRating).toBeInTheDocument();
  })

  test("should render SelectedCardDetails component with cuisines", () => {
    let cuisines = screen.getByText(/Biryani, Mughlai/i);
    expect(cuisines).toBeInTheDocument();
  })
})