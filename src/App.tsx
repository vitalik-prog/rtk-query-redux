import { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsersWithToolkit } from './store/reducers/ActionCreators';

function App() {
  // const dispatch = useAppDispatch();
  // const {users, isLoading, error} = useAppSelector((state) => state.userReducer);

  // useEffect(() => {
  //   // dispatch(fetchUsers()); It fires standart approach without redux-toolkit
  //   dispatch(fetchUsersWithToolkit()); // It fires redux-toolkit approach
  // }, [dispatch]);

  return (
    <div className="App">
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users)} */}
      <div style={{ display: "flex", gap: "150px" }}>
        <PostContainer />
      </div>
    </div>
  );
}

export default App;
