import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestroDetailData from "../MockData/RestroDetailData.json"; 
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import ItemList from "../../components/ItemList";
import { CDN_URL } from "../../utils/constants";

let cloneRestroDetailData = JSON.parse(JSON.stringify(RestroDetailData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards));
let filterItemCategory = cloneRestroDetailData?.filter((item) => item.card.card["@type"].includes("ItemCategory"))[0];
let itemCategoryData = filterItemCategory?.card?.card?.itemCards;

describe("Should render Item List Component", () => {
  const renderComponent = () => {
    return render(
      <Provider store={appStore}>
        <ItemList items={itemCategoryData} />
      </Provider>
    )
  }

  it("Should render all Item data", () => {
    renderComponent();
    let itemList = screen.getAllByTestId("item-data");
    let totalItems = itemList.length;
    expect(itemList.length).toBe(totalItems);
  });

  it("should render all item data with correct details", () => { 
    renderComponent();
    expect(screen.getByText("Lucknowi Paneer Biryani Serves 4")).toBeInTheDocument();
    expect(screen.getByText("Who said paneer in biryani is not a thing, Soft paneer pieces marinated in aromatic spices and dum-cooked with basmati rice will defy all the arguments.. For Raita as free accompaniment, please add it in the product selection. (Energy: 2600KCal, Carbohydrates: 197gm, Proteins: 74gm, Fats: 165gm, Sodium: 2094mg)")).toBeInTheDocument();
    expect(screen.getByAltText("Lucknowi Paneer Biryani Serves 4")).toHaveAttribute(
      "src",
      CDN_URL + "FOOD_CATALOG/IMAGES/CMS/2025/5/9/79211b10-ec07-453c-9cf1-0240facdbf13_53408672-ccd2-4276-93dc-c28009ee34ef.jpeg"
    );
  })

})