import { CDN_URL} from '../utils/constants';

const RestroContainer = (props) => {
  let { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId
  } = resData.card.info;
  
  return (
    <div className="restro-container">
      <div className="restro-img-container">
        <img className = "img" src = { CDN_URL + cloudinaryImageId } alt = "Example" />
      </div>
      <div className="restro-img-description">
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(', ')}</h4>
      </div>
    </div>
  );
};

export default RestroContainer;