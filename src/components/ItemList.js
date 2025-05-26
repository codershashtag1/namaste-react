import { useDispatch } from "react-redux"
import { addCart } from '../utils/cartSlice';
import { CDN_URL } from '../utils/constants';


const ItemList = (props) => {
  const { items } = props
  const dispatch = useDispatch()

  const handleAddCart = (item) => {
    dispatch(addCart(item))
  }

  return (
    <div data-testid="item-list">
    {items?.map((item) => {
      const {
        id,
        description,
        isVeg,
        name,
        price,
        imageId,
        ratings,
        defaultPrice
      } = item.card.info || {}

      const {
        rating,
        ratingCount,
        ratingCountV2
      } = ratings?.aggregatedRating || {}

      let priceOfItem = price || defaultPrice
      return (
        <div data-testid="item-data" key = {id} className = 'flex justify-between border-b-4 py-4'>
          <div className = 'flex flex-col py-5 w-8/12' >
            <span className='text-3xl font-bold text-gray-600'>{name}</span>
            <span className='text-2xl font-semibold'>₹ {priceOfItem / 100}</span>
            {rating && ratingCountV2 && <span className='text-1xl'>
              <span className='text-2xl text-green-950'>❇️ {rating}</span>
              <span className='text-2xl text-gray-400'> ({ratingCountV2})</span>
              </span>
            }
            <span className='text-lg text-gray-600 font-medium py-4'>{description}</span>
          </div>
          <div className="relative w-60 py-5">
            <img className="w-60 h-56 rounded-[2rem]" src={CDN_URL + imageId} alt={name} />
            <button className="absolute left-1/2 bottom-0 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-xl shadow-lg font-bold" onClick={() => handleAddCart(item)}>
              ADD +
            </button>
          </div>
        </div>
      )
    })}
    </div>
  )
}

export default ItemList