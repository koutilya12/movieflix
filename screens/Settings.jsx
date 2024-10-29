import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 20, textAlign: "center", fontWeight: "bold" }}>Settings</Text>

      <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 20 }}>
        <Image
          style={styles.profilePic}
          source={{ uri: "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg" }}
        />
        <View style={{ flexDirection: "column", marginLeft: 10, justifyContent: "center" }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "condensed" }}>Worlder</Text>
          <Text style={{ color: "white" }}>worlder@wolonote.com</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.profileButton}>
        <Ionicons name="people-sharp" size={22} color="white" />
        <Text style={styles.textStyle}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileButton}>
        <View style={{ backgroundColor: "white", height: 25, width: 25, borderRadius: 100, alignItems: "center", justifyContent: "center" }}>
          <Ionicons name="play" size={12} color="black" />
        </View>
        <Text style={styles.textStyle}>Appearance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileButton}>
        <View style={{ backgroundColor: "white", height: 25, width: 25, borderRadius: 100, alignItems: "center", justifyContent: "center" }}>
          <Ionicons name="help" size={20} color="black" />
        </View>
        <Text style={styles.textStyle}>Help</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131212",
    padding: 10
  },
  profilePic: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  textStyle: {
    fontSize: 15,
    color: "white",
    marginBottom: 8,
    color: "white",
    marginLeft: 10
  },
  profileButton: {
    padding: 10,
    flexDirection: "row",
    marginTop: 10
  }
})

export default Settings