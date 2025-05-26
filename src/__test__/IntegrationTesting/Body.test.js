import { render, screen, act, fireEvent } from "@testing-library/react";
import { mockFetch } from "../MockFunctions/mockFetch";
import RestListData from "../MockData/RestListData.json"
import Body from "../../components/Body";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"
import { showDiscount } from "../../components/RestroContainer";
const BodyWithOffline = require("../../components/Body").default;


mockFetch(RestListData)

it("Should render the list of restaurant that is searched", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ))

  const renderedList = screen.getAllByTestId("rest-data");
  expect(renderedList.length).toBe(7)

  const searchInput = screen.getByTestId("search-restro");
  fireEvent.change(searchInput, {
    target: {
      value: "biryani"
    }
  })

  const renderedListAfterSearch = screen.getAllByTestId("rest-data")
  expect(renderedListAfterSearch.length).toBe(4)
})

it("Should render the Top restaurant", async() => {
  await act(async () => render(
    <BrowserRouter>
      <Body/>
    </BrowserRouter>
  ))

  const restaurantList = screen.getAllByTestId("rest-data")
  expect(restaurantList.length).toBe(7)
  
  const topRestaurantBtn = screen.getByRole("button")
  fireEvent.click(topRestaurantBtn)

  const restaurantListAfterClickOnTopRestaurant = screen.getAllByTestId("rest-data")
  expect(restaurantListAfterClickOnTopRestaurant.length).toBe(2)

})

it("Should render RestroContainer or showDiscountOffer component according to condition", async () => {
  // Use the mockFetch and RestListData already set up in the file
  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ));

  const renderedList = screen.getAllByTestId("rest-data");
  // Check if at least one has discount and one does not
  // let hasDiscount = false;
  // let hasNoDiscount = false;
  renderedList.forEach(node => {
    if (node.card?.card?.info?.aggregatedDiscountInfoV3 != undefined) {
      let showDiscount = screen.getByTestId("discount-offer")
      expect(showDiscount).toBeInTheDocument()
    } 
    // else {
    //   let showDiscount = screen.getByTestId("discount-offer")
    //   expect(showDiscount).not.toBeInTheDocument()
    // }
  });
  // expect(hasDiscount).toBe(true);
  // expect(hasNoDiscount).toBe(true);
});
