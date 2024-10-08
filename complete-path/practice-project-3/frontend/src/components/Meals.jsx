import Error from './Error';
import MealItem from './MealItem';

import useHttp from '../hooks/useHttp';

export default function Meals() {
  const { data, isLoading, error } = useHttp('http://localhost:3000/meals');

  if (isLoading) return <p className="center">Fetching meals...</p>;
  if (error) return <Error title="Failed to fetch meals" message={error} />;

  return (
    <ul id="meals">
      {data && data.map(meal => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
