import { CDN_URL} from '../utils/constants';

const ItemCategory = (props) => {
  const { border, showItems, setShowIndex } = props
  const { title, itemCards, categoryId } = props?.items

  const handleToggle = () => {
    setShowIndex()
  }

  return (
    <div className = {`py-4 flex flex-col cursor-pointer ${border}`}
    key = {
      categoryId
    } >
      <div className = "flex justify-between" >
        <span className="text-3xl font-bold">{title} ({itemCards?.length})</span>
        <span className="text-2xl text-gray-300" onClick={handleToggle}>⬇️</span>
      </div>
      {showItems && itemCards?.map((item) => {
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
          <div key = {id} className = 'flex justify-between border-b-4 py-4'>
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
              <button className="absolute left-1/2 bottom-0 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-xl shadow-lg font-bold">
                ADD +
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ItemCategory