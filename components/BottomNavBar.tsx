import { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>;
const AnalyticsRoute = () => <Text>Analytics</Text>;
const SettingsRoute = () => <Text>Settings</Text>;

const BottomNavBar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      icon: 'home',
      color: '#6200ee',
    },
    {
      key: 'analytics',
      title: 'Analytics',
      icon: 'chart-line',
      color: '#009688',
    },
    {
      key: 'settings',
      title: 'Settings',
      icon: 'cog',
      color: '#3f51b5',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    analytics: AnalyticsRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavBar;
