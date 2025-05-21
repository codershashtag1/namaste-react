import { useContext } from 'react';
import RestaurantDetailContext from '../utils/RestaurantDetailContext';

const SelectedCardDetails = () => {
  const selectedCardDetails = useContext(RestaurantDetailContext);
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
    cuisines,
    areaName
  } = selectedCardDetails || {};
  console.log(selectedCardDetails);
  return (
    <div className='w-full'>
      <h1 className='text-4xl font-bold'>{name}</h1>
      <div className = 'border-[15px] border-gray-300 rounded-xl rounded-tr-2xl p-4 mt-4 shadow-2xl opacity-90 w-full'>
        <h2 className='text-2xl font-bold'>❇️ {avgRating} ({totalRatingsString}) {costForTwoMessage}</h2>
        <p className='mt-2 text-red-500 font-bold underline-offset-1'>
          <u className='text-lg gap-2 underline-offset-4'>{cuisines?.join(", ")}</u>
        </p>
        <div> 
          <p className='text-1xl font-bold py-2'>Outlet {areaName}</p>
          <p className='text-1xl font-bold py-2'>{sla?.slaString}</p>
        </div>
      </div>
    </div>
  )
}

export default SelectedCardDetails