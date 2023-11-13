import React from 'react';
import useFetch from './useFetch';

const App = () => {
  const { data, loading, error } = useFetch(
    'https://fakestoreapi.com/products'
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render your UI with the fetched data
  return (
    <div>
      {data.map((user, index) => (
        <li key={index}>
          <p>Title: {user.title}</p>
        </li>
      ))}
    </div>
  );
};

export default App;
