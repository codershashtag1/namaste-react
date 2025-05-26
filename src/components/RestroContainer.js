import { CDN_URL} from '../utils/constants';

const RestroContainer = (props) => {

  let { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    areaName,
    locality
  } = resData?.card?.info || {};
  
  return (
    <div className="w-[400px]" data-testid="rest-data">
      <div className="restro-img-container">
      {
        /* transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 */ }
        <img className = "bg-gray-500 shadow-lg shadow-gray-500/50 h-[250px] w-[400px] rounded-3xl transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        src = { CDN_URL + cloudinaryImageId}
        alt = "Example" 
        data-testid="food-img"
        />
      </div>
      <div className="restro-img-description">
        <h3 data-testid="restro-name" className="text-2xl font-bold">{name}</h3>
        <h4 data-testid="restro-avgRating" className="text-1xl font-semibold">{avgRating}</h4>
        <h4 data-testid="restro-cuisines" className="text-1xl font-semibold">{cuisines?.join(', ')}</h4>
        <h4 data-testid="restro-location" className="text-1xl font-semibold">{areaName}, {locality}</h4>
      </div>
    </div>
  );
};

export const showDiscount = (RestroContainer) => {
  return (props) => {
    const { resData } = props
    const { header, subHeader } = props?.discountOffer

    return (
      <div className="relative w-fit">
        { 
          header != undefined || subHeader != undefined ? (
            <div data-testid = "discount-offer" className = "absolute top-2 text-white px-2 py-1 rounded z-10 text-4xl font-bold shadow" >
              {header} {(subHeader != undefined) ? subHeader : ""}
            </div>
          ) : ""
        }
        <RestroContainer resData={resData} />
      </div>
    );
  }
}

export default RestroContainer;