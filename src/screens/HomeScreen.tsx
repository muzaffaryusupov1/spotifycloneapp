import { Bell, History, Settings } from 'lucide-react-native';
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const onPress = () => {
    Alert.alert('Alert');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        {/* Header */}

        <View style={styles.headerContainer}>
          <View style={styles.headerTop}>
            <Text style={styles.headerText}>Recently played</Text>
            <View style={styles.iconWrapper}>
              <TouchableOpacity onPress={onPress}>
                <Bell size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPress}>
                <History size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPress}>
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
                  <Image
                    source={imageMap[item.name]}
                    style={styles.cardImage}
                  />
                  <Text style={styles.cardTitle}>{item.title}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Blog card */}
        <View style={styles.bodyView}>
          <View style={styles.blogCard}>
            <Image
              source={require('../../assets/images/spotify-images/img1.png')}
              style={styles.blogCardImage}
            />
            <View style={styles.blogTextWrapper}>
              <Text style={styles.blogHashtag}>#SPOTIFYWRAPPED</Text>
              <Text style={styles.blogTitle}>Your 2021 in review</Text>
            </View>
          </View>
        </View>

        <View style={styles.songsContainer}>
          <View style={styles.topSongsContainer}>
            <View style={styles.topSongsCard}>
              <Image
                source={require('../../assets/images/spotify-images/img1.png')}
                style={styles.topSongsImage}
              />
              <Text style={styles.topSongsTitle}>Your Top Songs 2021</Text>
            </View>
            <View style={styles.topSongsCard}>
              <Image
                source={require('../../assets/images/img1.jpg')}
                style={styles.topSongsImage}
              />
              <Text style={styles.topSongsTitle}>Your Top Songs 2021</Text>
            </View>
          </View>
          <View>
            <Text style={styles.bottomTitle}>Editor’s picks</Text>
            <ScrollView
              style={styles.bottomContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((item, index) => (
                <View key={index} style={styles.bottomCard}>
                  <Image
                    source={imageMap[item.name]}
                    style={styles.bottomImage}
                  />
                  <Text style={styles.bottomText}>{item.title}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const imageMap: Record<string, any> = {
  img1: require('../../assets/images/img1.jpg'),
  img2: require('../../assets/images/img11.png'),
  img3: require('../../assets/images/img12.png'),
  img4: require('../../assets/images/img15.jpg'),
  img5: require('../../assets/images/img14.jpg'),
  img6: require('../../assets/images/img13.png'),
  img7: require('../../assets/images/img7.jpg'),
  img8: require('../../assets/images/img8.jpg'),
};

const cards = [
  { name: 'img1', title: 'Monkey' },
  { name: 'img2', title: '1(Remastered)' },
  { name: 'img3', title: 'Marvin Gaye' },
  { name: 'img4', title: 'Lana Del Rey' },
  { name: 'img5', title: 'The Weeknd' },
  { name: 'img6', title: 'This Is Coldplay' },
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
  songsContainer: {
    flex: 1,
  },
  topSongsContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    marginVertical: 24,
  },
  topSongsCard: {
    width: 153,
    height: 187,
  },
  topSongsImage: {
    width: 153,
    height: 154,
  },
  topSongsTitle: {
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: -0.03,
    color: '#fff',
  },
  bottomContainer: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 12,
  },
  bottomTitle: {
    fontWeight: 600,
    fontSize: 24,
    letterSpacing: -0.05,
    color: '#fff',
  },
  bottomCard: {
    width: 161,
    height: 193,
  },
  bottomImage: {
    width: 154,
    height: 154,
  },
  bottomText: {
    fontWeight: 500,
    fontSize: 11,
    color: '#b3b3b3',
  },
});
