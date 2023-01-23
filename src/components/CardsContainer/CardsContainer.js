import Trendcard from "components/Trendcard/Trendcard";

import styles from "./CardsContainer.module.scss";

const CardsContainer = ( { cardItems } ) => {
  return (
    <div className={ styles.container }>
      { cardItems && cardItems.map( movie => {
        return <Trendcard key={ movie.id } movie={ movie }/>;
      } ) }

      {/*TODO - add pagination*/}
    </div>
  );
}

export default CardsContainer;