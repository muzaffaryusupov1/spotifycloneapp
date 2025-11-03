import { Bell, History, Settings } from 'lucide-react-native';
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      {/* Header */}

      <View style={styles.headerContainer}>
        <View style={styles.headerTop}>
          <Text style={styles.headerText}>Recently played</Text>
          <View style={styles.iconWrapper}>
            <TouchableOpacity>
              <Bell size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <History size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Settings size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Flat card */}
        <View>
          <ScrollView
            style={styles.scrollViewContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map(item => (
              <View key={item.name} style={styles.card}>
                <Image source={imageMap[item.name]} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.bodyView}>
        <View style={styles.blogCard}>
          <Image
            source={require('../assets/images/spotify-images/img1.png')}
            style={styles.blogCardImage}
          />
          <View style={styles.blogTextWrapper}>
            <Text style={styles.blogHashtag}>#SPOTIFYWRAPPED</Text>
            <Text style={styles.blogTitle}>Your 2021 in review</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const imageMap: Record<string, any> = {
  img1: require('../assets/images/img1.jpg'),
  img2: require('../assets/images/img2.jpg'),
  img3: require('../assets/images/img3.jpg'),
  img4: require('../assets/images/img4.jpg'),
  img5: require('../assets/images/img5.jpg'),
  img6: require('../assets/images/img6.jpg'),
  img7: require('../assets/images/img7.jpg'),
  img8: require('../assets/images/img8.jpg'),
};

const cards = [
  { name: 'img1', title: 'Monkey' },
  { name: 'img2', title: 'Sad tiger' },
  { name: 'img3', title: 'Tomato speed' },
  { name: 'img4', title: 'Furuta' },
  { name: 'img5', title: 'Piccolo speed' },
  { name: 'img6', title: 'Freaky granddad' },
  { name: 'img7', title: 'Silver Surfer' },
  { name: 'img8', title: 'James Doakes' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  headerContainer: {
    // flex: 1,
  },
  headerText: {
    fontFamily: 'Avenir Next',
    fontWeight: 700,
    fontSize: 19,
    lineHeight: 20,
    color: '#fff',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  iconWrapper: {
    flexDirection: 'row',
    gap: 22,
  },
  scrollViewContainer: {
    marginTop: 24,
  },
  card: {
    maxWidth: 111,
    gap: 16,
    marginRight: 12,
    alignItems: 'center',
  },
  cardImage: {
    width: 111,
    height: 105,
    borderRadius: 999,
  },
  cardTitle: {
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: -0.03,
    color: '#fff',
    textAlign: 'center',
  },
  blogCard: {
    flexDirection: 'row',
    gap: 8,
  },
  blogCardImage: {
    borderRadius: 2,
    width: 58,
    height: 58,
  },
  bodyView: {
    flex: 2,
    marginTop: 24,
  },
  blogHashtag: {
    fontWeight: 400,
    fontSize: 10,
    textAlign: 'center',
    color: '#9c9c9c',
    paddingTop: 8,
  },
  blogTitle: {
    fontWeight: 600,
    fontSize: 26,
    letterSpacing: -0.05,
    color: '#fff',
  },
  blogTextWrapper: {
    flex: 1,
    alignItems: 'baseline',
  },
});
