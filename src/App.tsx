import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostsContainer from './components/PostsContainer';

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {isLoading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <span>{u.name}</span>
            -
            <span>{u.email}</span>
          </li>
        ))}
      </ul>
      <br />
      <hr />
      <PostsContainer />
    </div>
  );
}

export default App;
