import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <View style={styles.root}>
      <View style={styles.phone}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#A8D5BA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  phone: {
    width: 375,
    height: 812,
    backgroundColor: '#fff',
    borderRadius: 30,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
});