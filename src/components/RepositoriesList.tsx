import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    state => state.repositories
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && (
          <ul>
            {data.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default RepositoriesList;
