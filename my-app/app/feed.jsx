import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native'

export default function Feed() {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (!token) {
        router.replace('/');
      }
    };

    checkToken();
  }, []);

  const getFeed = async () => {
  const token = await AsyncStorage.getItem('token');

  const response = await fetch('https://crispy-system-66rqwjp7vw53rrx9-3000.app.github.dev/home/feed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
};

  return (
    <View>
      <Text>Feed</Text>
    </View>
  );
}