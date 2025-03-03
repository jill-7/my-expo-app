import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router';

export default function Project1() {
    const router = useRouter();
  return (
    <ScrollView style={styles.container}>
    
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/forest1.jpg')} 
        style={styles.topImage}
      />

      <TouchableOpacity style={styles.backIcon} onPress={() => router.push('/')}>
        <Ionicons name="chevron-back-circle-outline" size={30} color="black" />
        </TouchableOpacity>
      
      <View style={styles.imageTextContainer}>
        <Text style={styles.imageText}>The Lamu Mangrove Project</Text>
      </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Project Description</Text>
        <Text style={styles.subTitle}>Lorem ipsum dolor sit amet consectetur</Text>
        <Text style={styles.paragraph}>
          Lobortis amet ultrices pellentesque amet pellentesque. Et molestie a eget bibendium amet tincidunt dui eget. Vulputate massa egestas feugiat lectus ac scelerisque facilisi. Lrem egestas venenatis est at maecenas nec id. In massa sed dictumst egestas malesuada suspendisse. Eu gravida adipiscing dictum arcu pellentesque dictum nisi mattis. Sapien non aliquet phasellus odio sagittis et dignissim condimentum. Omare semper volutpat interdum quis sit condimentum. Orci laoreet mi id rhoncus commodo. Nec rhoncus eget cursus a sit ac. Velit metus ultrices dapibus consequat aliquam vel in. 
        </Text>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Project Photos</Text>

        
        <View style={styles.imageRow}>
          <Image
            source={require('../assets/forest2.jpg')} 
            style={styles.smallImage}
          />
          <Image
            source={require('../assets/forest3.jpg')} 
            style={styles.smallImage}
          />
        </View>

        
        <View style={styles.imageRow}>
          <Image
            source={require('../assets/forest4.jpg')} 
            style={styles.largeImage}
          />
          <View style={styles.smallImageColumn}>
            <Image
              source={require('../assets/forest5.jpg')}
              style={styles.smallerImage}
            />
            <Image
              source={require('../assets/forest6.jpg')} 
              style={styles.smallestImage}
            />
          </View>
        </View>

        
        <View style={styles.imageRow}>
          <Image
            source={require('../assets/forest7.jpg')} 
            style={styles.smallImage}
          />
          
        </View>
      </View>

      
      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.donateButtonText}>Donate Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  imageTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  imageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  topImage: {
    width: '100%',
    height: 250, 
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  smallImage: {
    width: '48%',
    height: 100,
    borderRadius: 10,
  },
  smallerImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 7,
  },
  smallestImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  largeImage: {
    width: '48%',
    height: 210,
    borderRadius: 10,
  },
  smallImageColumn: {
    width: '48%',
  },
  donateButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  donateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});