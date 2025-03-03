import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function Home() {
    const router = useRouter();
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollContainer}>
      
      <Text style={styles.date}>Sat, 11 March 2023</Text>
      <Text style={styles.greeting}>Hello, Susy!</Text>
      <Text style={styles.title}>Your Carbon Footprint</Text>

      
      <Image source={require('../assets/chart.jpg')}
       style={styles.image}
      />

      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Offsetting</Text>
      </TouchableOpacity>

     
      <View style={styles.projectsHeader}>
        <Text style={styles.projectsTitle}>Gokijany Projects</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      
      <View style={styles.imageRow}>
       <Image source={require('../assets/lamu_mangrove.jpg')}
        style={styles.homeimages}
       />
       <Image source={require('../assets/elgon-forest.jpg')}
       style={styles.homeimages} 
       />
      </View>
      </ScrollView>

      
      <View style={styles.bottomNav}>
        <View style={styles.icon}>
        <Ionicons name="home-outline" size={24} />
        <Text style={styles.navLabel}>Home</Text>
        </View>
        
        <TouchableOpacity style={styles.icon} onPress={() => router.push('/Project1')}>
        <Ionicons name="compass" size={24} />
        <Text style={styles.navLabel}>Feed</Text>
        </TouchableOpacity>
        
        <View style={styles.icon}>
        <Ionicons name="bag-handle-outline" size={24} />
        <Text style={styles.navLabel}>Shop</Text>
        </View>
        <View style={styles.icon}>
        <Ionicons name="settings-sharp" size={24} />
        <Text style={styles.navLabel}>Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    height: 300,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  projectsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  projectsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 16,
    color: '#4CAF50',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  homeimages: {
    width: '48%',
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  navLabel: {
    fontSize: 14,
    color: '#666',
  },
  icon: {
    alignItems: 'center',
  },
});