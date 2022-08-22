import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { imageUrl } from "config";
import { calcDate } from "helpers/helpers";
import Genre from "components/Genre/Genre";

import styles from "./Card.module.scss";

const Card = ( props ) => {
  console.log(props);
  const [item, setItem] = useState();
  // const [releaseDate, setReleaseDate] = useState();

  useEffect(() => {
    setItem(props)
    // setReleaseDate(calcDate(props.release_date));

    return () => {};
  }, [item, props]);
  console.log('%c ITEM' , 'background: #222; color: #bada55');
  console.log(item);

  console.log('%c 1111111' , 'background: #222; color: #bada55');
  console.log(item);

  // if(!item && !item.props) return <></>;

  return (
    <div className={cn(styles.card, props.className)}>
      {/*{props.children}*/}
      {/*<figure className={styles.card__imgWrapper}>*/}
      {/*  <img src={item.props.poster_path && `${imageUrl}/${item.props.poster_path}`}*/}
      {/*       className={styles.card__img} alt="" />*/}

      {/*  {item.props.genre_ids && (*/}
      {/*    <figcaption className={styles.card__caption}>*/}
      {/*      <Genre className={styles.card__genres} genres={item.props.genre_ids} />*/}
      {/*    </figcaption>*/}
      {/*  )}*/}
      {/*</figure>*/}

      {/*<div className={styles.card__description}>*/}
      {/*  <Link to={`/movie/${item.props.id}`} className={styles.card__link}>*/}
      {/*    <span className={styles.card__title}>{item.props.title}</span>*/}
      {/*  </Link>*/}

      {/*  <div className={styles.card__content}>*/}
      {/*    /!*<div className={styles.card__release}>{releaseDate}</div>*!/*/}

      {/*    <div className={styles.card__ratingValue}>*/}
      {/*      6.8*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Card;