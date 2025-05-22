import ItemList from "./ItemList"

const ItemCategory = (props) => {
  const { border, showItems, setShowIndex } = props
  const { title, itemCards, categoryId } = props?.items

  const handleToggle = () => {
    setShowIndex()
  }

  return (
    <div className = {`py-4 flex flex-col cursor-pointer ${border}`} key = {categoryId} >
      <div className = "flex justify-between" >
        <span className="text-3xl font-bold">{title} ({itemCards?.length})</span>
        <span className="text-2xl text-gray-300" onClick={handleToggle}>⬇️</span>
      </div>
      {
        showItems && <ItemList items={itemCards} />
      }
    </div>
  )
}

export default ItemCategory