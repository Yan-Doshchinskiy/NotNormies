import './App.scss';
import React from 'react';
import routes from 'routes/routes';
// @ts-ignore
import { useRoutes } from 'hookrouter';
import Layout from "./layout/Layout";

const App = () => {
  // @ts-ignore
  const match = useRoutes(routes);
  return (
      <Layout>
          {match}
      </Layout>
  );
};

export default App;
