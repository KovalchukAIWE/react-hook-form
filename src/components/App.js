import React from 'react';
// import Form from './Form/Form';
import PaginationApp from './Pagination/Pagination';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Form /> */}
        <PaginationApp />
      </BrowserRouter>
    </>
  );
}

export default App;
