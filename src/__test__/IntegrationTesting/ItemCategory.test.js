import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemCategory from "../../components/ItemCategory";
import RestroDetailData from "../MockData/RestroDetailData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"

let cloneRestroDetailData = JSON.parse(JSON.stringify(RestroDetailData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards));
let filterItemCategory = cloneRestroDetailData?.filter((item) => item.card.card["@type"].includes("ItemCategory"))[0]

describe("ItemCategory Component", () => {
  let mockSetShowIndex;
  const renderComponent = (showItems) => {
    mockSetShowIndex = jest.fn();
    return render(
      <Provider store={appStore}>
        <ItemCategory 
          items={filterItemCategory?.card?.card} key={filterItemCategory.card.card.categoryId} 
          border="border-b-[15px]" 
          showItems = {showItems}
          setShowIndex = {mockSetShowIndex}
        />
      </Provider>
    );
  };

  it('should render Item List onClick event fired', () => { 
    renderComponent(false);
    const accordionToggle = screen.getByText("⬇️");
    fireEvent.click(accordionToggle);
    expect(mockSetShowIndex).toHaveBeenCalled();
    renderComponent(true);
    const itemList = screen.getByTestId("item-list");
    expect(itemList).toBeInTheDocument();
  })

  it("Should not render Item List if showItems is false", () => {
    renderComponent(false);
    const itemList = screen.queryByTestId("item-list");
    expect(itemList).not.toBeInTheDocument();
  })
})