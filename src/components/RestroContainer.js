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
  } = resData.card.info;
  
  return (
    <div>
      <div className="restro-img-container">
      {
        /* transition delay-75 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 */ }
        <img className = "bg-gray-500 shadow-lg shadow-gray-500/50 h-[250px] w-[400px] rounded-3xl transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        src = { CDN_URL + cloudinaryImageId}
        alt = "Example" />
      </div>
      <div className="restro-img-description">
        <h3 className="text-2xl font-bold">{name}</h3>
        <h4 className="text-1xl font-semibold">{avgRating}</h4>
        <h4 className="text-1xl font-semibold">{cuisines.join(', ')}</h4>
        <h4 className="text-1xl font-semibold">{areaName}, {locality}</h4>
      </div>
    </div>
  );
};

export default RestroContainer;