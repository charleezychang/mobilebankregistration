import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardsTab from './CardsTab';

const MainView = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <CardsTab />
    </>
  );
}

export default MainView