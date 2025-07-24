import React from 'react'
import Loader from './Components/Loader'
import AllRoutes from './Routes/AllRoutes'

import TostContainer from './Components/ToastContainer';

const App = () => {
  return (
    <>
      <Loader />
      <TostContainer />
      <AllRoutes />
    </>
  );
}

export default App