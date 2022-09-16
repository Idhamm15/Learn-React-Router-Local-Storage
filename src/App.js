import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Foot from './component/Foot';
import Layout from './component/Layout';
import Nav from './component/Nav';
import FourZeroFour from './pages/FourZeroFour';
import Home from './pages/Home';
import Login from './pages/Login';

const ProtectedRoute = ( {children} ) => {
  if (localStorage.getItem('token') != 'adaTokenNih') {
    return <Navigate to={'/login'} replace />;
  } else {
    return children;
  }
};

function App() {
  const title = "Kebun Binatang Kawah Edukasi";
  const createdBy = "Oki";

  return (
    <React.Fragment>
      <Nav 
        title={title}
      />
      <Layout>
        <Routes>
          <Route 
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
            exact
          />
          <Route 
            path='/login'
            element={<Login />}
            exact
          />
          <Route 
            path='*'
            element={<FourZeroFour />}
          />
        </Routes>
      </Layout>
      <Foot
        createdBy={createdBy}
      />  
    </React.Fragment>
  );
}

export default App;