import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemCategory from "../../components/ItemCategory";
import RestroDetailData from "../MockData/RestroDetailData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"

let cloneRestroDetailData = JSON.parse(JSON.stringify(RestroDetailData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards));
let filterItemCategory = cloneRestroDetailData?.filter((item) => item.card.card["@type"].includes("ItemCategory"))[0]


describe("ItemCategory Component", () => {
  
  const renderComponent = (showItems) => {
    return render(
      <Provider store={appStore}>
        <ItemCategory 
          items={filterItemCategory?.card?.card} key={filterItemCategory.card.card.categoryId} 
          border="border-b-[15px]" 
          showItems = {showItems}
          setShowIndex = {jest.fn()}
        />
      </Provider>
    );
  };

  it('should render title in Item Category', () => { 
    renderComponent(false);
    const itemsLength = filterItemCategory?.card?.card?.itemCards?.length;
    const title = screen.getByText(`Recommended (${itemsLength})`);
    expect(title).toBeInTheDocument();
  })
})