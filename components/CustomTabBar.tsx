import Ionicons from '@react-native-vector-icons/ionicons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const labelValue =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName: string;
        if (route.name === 'Home')
          iconName = isFocused ? 'home' : 'home-outline';
        else if (route.name === 'Search')
          iconName = isFocused ? 'search' : 'search-outline';
        else if (route.name === 'Library')
          iconName = isFocused ? 'library' : 'library-outline';
        else iconName = 'ellipse-outline';

        const displayLabel =
          typeof labelValue === 'string'
            ? labelValue
            : typeof labelValue === 'function'
            ? labelValue({
                focused: isFocused,
                color: isFocused ? '#1DB954' : '#fff',
                position: 'below-icon',
                children: route.name,
              })
            : route.name;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tab, isFocused && styles.activeTab]}
          >
            <Ionicons
              name={iconName as any}
              size={26}
              color={isFocused ? '#1DB954' : '#fff'}
            />
            <Text
              style={[styles.label, { color: isFocused ? '#1DB954' : '#fff' }]}
            >
              {displayLabel}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 0,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    transform: [{ scale: 1.1 }],
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});
