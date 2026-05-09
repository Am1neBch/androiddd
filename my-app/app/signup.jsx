import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  const handleSignup = async () => {
    try {
      const response = await fetch('https://crispy-system-66rqwjp7vw53rrx9-3000.app.github.dev/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password , username }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        alert(data.message || 'SignUp failed');
        console.log(data);
        return;
        
      }
  
      console.log('SUCCESS:', data);
  
    } catch (error) {
      console.log(error);
      alert(error.message);
      
    }
  };
    
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.back}>
        ← Back to login
      </Link>

      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
            />

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

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  back: {
    color: '#0F6D5E',
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F6D5E',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#d8d6d6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },

  button: {
    backgroundColor: '#0F6D5E',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});