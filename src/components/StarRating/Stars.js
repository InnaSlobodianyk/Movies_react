import { IoStar, IoStarOutline } from "react-icons/io5";

const starsNum = Array(10).fill(null);

const Stars = ({ isOutline }) => (
  <>
    { starsNum.map( (star, index) => isOutline ? <IoStarOutline key={ index } /> : <IoStar key={ index } /> ) }
  </>
);

export default Stars;