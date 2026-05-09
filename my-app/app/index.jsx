import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter('')

  const handleLogin = async () => {
  try {
    const response = await fetch('https://crispy-system-66rqwjp7vw53rrx9-3000.app.github.dev/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    await AsyncStorage.setItem('token', data.token);

    if (!response.ok) {
      alert(data.message || 'Login failed');
      console.log(data);
      return;
      
    }

    console.log('SUCCESS:', data);
    router.replace("/feed")

  } catch (error) {
    console.log(error);
    alert(error.message);
    
  }
};
  

return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.subtitle}>Welcome to plantland</Text>

      <TextInput
  placeholder="Email"
  style={styles.input}
  value={email}
  onChangeText={setEmail}
      />

      <TextInput
  placeholder="Password"
  secureTextEntry
  style={styles.input}
  value={password}
  onChangeText={setPassword}
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText} >Login</Text>
      </TouchableOpacity>

      <Text style={styles.or}>— or login with —</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Link style={styles.socialText} href="/googleLogin">Login with Google</Link>
      </TouchableOpacity>

      <Link href="/signup" style={styles.signup}>
        Don't have an account? <Text style={{ fontWeight: 'bold' }}>Sign Up</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F6D5E',
  },

  subtitle: {
    marginBottom: 20,
    color: '#555',
  },

  input: {
    backgroundColor: '#d8d6d6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },

  forgot: {
    textAlign: 'right',
    color: '#0F6D5E',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#0F6D5E',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  or: {
    textAlign: 'center',
    marginVertical: 15,
    color: '#999',
  },

  socialButton: {
    backgroundColor: '#EAF4F1',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  socialText: {
    color: '#0F6D5E',
  },

  signup: {
    textAlign: 'center',
    marginTop: 15,
    color: '#555',
  },
});