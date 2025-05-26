import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccordianGroupCard from '../../components/AccordianGroupCard';
import RestaurantDetailContext from '../../utils/RestaurantDetailContext';
import RestroDetailData from "../MockData/RestroDetailData.json";

let cloneRestroDetailData;

describe("Should render ItemCategory and NestedGroup component based on data", () => {

  beforeEach(() => {
    cloneRestroDetailData = JSON.parse(JSON.stringify(RestroDetailData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards));
  })

  const renderComponent = (cloneRestroDetailData) => {
    render(
      <RestaurantDetailContext.Provider value = {cloneRestroDetailData} >
        <AccordianGroupCard />
      </RestaurantDetailContext.Provider>
    );
  }

  test("should render ItemCategory component NestedGroup Component", () => {
    renderComponent(cloneRestroDetailData);
    const itemCategory = screen.getAllByTestId("item-category");
    expect(itemCategory.length).toBeGreaterThan(0);
    const nestedItemCategory = screen.getAllByTestId("nested-item-category");
    expect(nestedItemCategory.length).toBeGreaterThan(0);
  })

  test("should render ItemCategory conponent not nested Group Component", () => {
    cloneRestroDetailData = cloneRestroDetailData.filter((item) => item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    renderComponent(cloneRestroDetailData);
    const itemCategory = screen.getAllByTestId("item-category");
    expect(itemCategory.length).toBeGreaterThan(0);
    const nestedItemCategory = screen.queryAllByTestId("nested-item-category");
    expect(nestedItemCategory.length).toBe(0);
  })
})