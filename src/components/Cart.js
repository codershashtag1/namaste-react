import ItemList from "./ItemList"
import { useSelector, useDispatch } from "react-redux"
import { removeCart } from "../utils/cartSlice"

const Cart = () => {
  const item = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(removeCart())
  }

  return (
    <div className="flex flex-col items-center justify-center my-7">
      <h1 className="font-bold text-4xl mb-4">Cart</h1>
      {item.length === 0 ? (
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-center">
            No Items present in cart. Please add some items in cart to enjoy delicious food.
          </h1>
        </div>
      ) : (
        <div>
          <button className="p-4 rounded-lg bg-red-500 text-white font-bold" onClick={handleClearCart}>Clear Card</button>
          <ItemList items={item} />
        </div>
      )}  
    </div>
  )
}

export default Cart