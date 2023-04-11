import Trendcard from 'components/Trendcard';

const TrendcardsContainer = ( { movies } ) => movies.map( movie => <Trendcard key={ movie.id } movie={ movie } /> );

export default TrendcardsContainer;