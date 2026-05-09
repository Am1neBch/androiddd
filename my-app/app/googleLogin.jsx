import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const googleLogin = () => {
  return (
    <View>
      <Text>googleLogin</Text>
      <Link href="/">go back</Link>
    </View>
  )
}

export default googleLogin

const styles = StyleSheet.create({})