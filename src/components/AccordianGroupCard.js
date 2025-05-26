import { useContext, useState } from "react";
import RestaurantDetailContext from "../utils/RestaurantDetailContext";
import ItemCategory from "./ItemCategory";
import NestedItemCategory from "./NestedItemCategory";

const AccordianGroupCard = () => {

  const [showIndex, setShowIndex] = useState(0);

  const groupCards = useContext(RestaurantDetailContext);
  const data = groupCards?.filter((item) => item.card.card["@type"].includes("ItemCategory"))

  return (
    <div className="py-10" data-testid="accordian-group-card">
      {
      data?.map((item) => {
        return (item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
          ? <ItemCategory
              items={item?.card?.card} key={item.card.card.categoryId} 
              border="border-b-[15px]" 
              showItems = {
                item.card.card.categoryId === showIndex ? true : false
              }
              setShowIndex = {() => setShowIndex(item.card.card.categoryId)}
            />
          : <NestedItemCategory 
              category={item?.card?.card} key={item.card.card.categoryId} categoryId={item.card.card.categoryId}
              selectedNestedIndex = {
                showIndex === item.card.card.categoryId ? true : false
              }
              setShowIndex = {
                () => setShowIndex(item.card.card.categoryId)
              }
            />;
      })}
    </div>
  )
}

export default AccordianGroupCard