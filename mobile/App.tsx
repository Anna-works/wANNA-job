import React from 'react';
import { StatusBar, Text } from 'react-native';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Page from './components/Page';
import { useRestaurants } from './hooks/useRestaurants';

const App: () => JSX.Element = () => {
  const restaurants = useRestaurants();
  console.log({ restaurants });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Page>
        <Header />
        <Welcome />
        {restaurants.map(({ id, title }) => (
          <Text key={id}>{title}</Text>
        ))}
      </Page>
    </>
  );
};

export default App;
