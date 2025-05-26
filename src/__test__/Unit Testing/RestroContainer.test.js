import { render, screen } from "@testing-library/react"
import RestroContainer, { showDiscount } from "../../components/RestroContainer"
import RestroContainerMockData from "../MockData/RestroContainerMockData.json"
import "@testing-library/jest-dom"

const renderRestaurantContainer = (clonedMockData) => {
  return render(<RestroContainer resData={clonedMockData}/>)
}

const renderShowDiscount = (clonedMockData) => {
  const DiscountComponent = showDiscount(RestroContainer)
  return render(
    <DiscountComponent 
      resData={clonedMockData} 
      discountOffer = {clonedMockData.card?.info?.aggregatedDiscountInfoV3}
    />)
}


describe("Should render the card and card Details", () => {
  let clonedMockData;
  beforeEach(() => {
    clonedMockData = RestroContainerMockData
    renderRestaurantContainer(clonedMockData)
  })

  it("Should render image of the restuarant", async () => {
    const image = await screen.getByRole("img");
    expect(image).toBeInTheDocument()
  })

  it("Should render name of the restaurant", () => {
    const name = screen.getByTestId("restro-name")
    expect(name).toHaveTextContent("New Banana Leaf")
  })

  it("Should render avgRating of the restaurant", () => {
    const avgRating = screen.getByTestId("restro-avgRating")
    expect(avgRating).toHaveTextContent("4.4")
  })  

  it("Should render cuisines of the restaurant", () => {
    const cuisines = screen.getByTestId("restro-cuisines");
    expect(cuisines).toHaveTextContent("South Indian, Chinese, Fast Food")
  })

  it("Should render location of the restaurant", () => {
    const location = screen.getByTestId("restro-location");
    expect(location).toHaveTextContent("Dombivli East, Dombivli East")
  })
})

describe("Should Render High Order Component", () => {
  let clonedMockData;

  beforeEach(() => {
    clonedMockData = JSON.parse(JSON.stringify(RestroContainerMockData))
  })

  it("should render dicountOffer with header and subHeader", () => {
    renderShowDiscount(clonedMockData)
    let discountOffer = screen.getByTestId("discount-offer")
    expect(discountOffer).toHaveTextContent("ITEMS AT ₹169")
  })

  it("Should render dicountOffer with header and without subHeader", () => {
    delete clonedMockData.card.info.aggregatedDiscountInfoV3.subHeader
    renderShowDiscount(clonedMockData)
    let discountOffer = screen.getByTestId("discount-offer")
    expect(discountOffer).toHaveTextContent("ITEMS")
  })

  it("Should render dicountOffer without header and with subHeader", () => {
    delete clonedMockData.card.info.aggregatedDiscountInfoV3.header
    renderShowDiscount(clonedMockData)
      let discountOffer = screen.getByTestId("discount-offer")
      expect(discountOffer).toHaveTextContent("AT ₹169")
  })

  it("Should render dicountOffer without header and subHeader", () => {
    delete clonedMockData.card.info.aggregatedDiscountInfoV3.header
    delete clonedMockData.card.info.aggregatedDiscountInfoV3.subHeader
    renderShowDiscount(clonedMockData);
    let discountOffer = screen.queryByTestId("discount-offer")
    expect(discountOffer).not.toBeInTheDocument()
  })
})

describe("No props available", () => {
  let clonedMockData = {};

  it("should not render name of the restaurant", () => {
    renderRestaurantContainer(clonedMockData);
    let name = screen.queryByText(/ /);
    expect(name).not.toBeInTheDocument()
  })
})

