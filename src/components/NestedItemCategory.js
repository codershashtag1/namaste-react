import ItemCategory from "./ItemCategory";
import { useState, useEffect } from "react";

const NestedItemCategory = (props) => {
  const { title, categories } = props.category
  const [showIndex, setShowIndex] = useState(0);

  return (
      <div className = "py-4 flex flex-col justify-between" >
        <span className="text-3xl pb-4 font-bold">{title}</span>
        {
          categories?.map((item) => {
            const { categoryId } = item
            const isLast = categories.indexOf(item) === categories.length - 1;
            return (
              <ItemCategory
              items={item}
              key={categoryId}
              border = {
                isLast ? "border-b-[15px]" : "border-b-4"
              }
              showItems = {
                categoryId === showIndex && props.selectedNestedIndex == true ? true : false
              }
              setShowIndex = {
                () => {
                  setShowIndex(categoryId)
                  categoryId != props.selectedNestedIndex && props.setShowIndex()
                }
              }
              />
            )
          })
        }
      </div>
  )
}

export default NestedItemCategory