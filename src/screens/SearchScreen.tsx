import { Camera, Search } from 'lucide-react-native';
import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SearchScreen = () => {
  const onPress = () => {
    Alert.alert('Alert');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerTop}>
        <View style={styles.headerTopWrapper}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/img7.jpg')}
              style={styles.headerTopAvatar}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Search</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Camera size={29} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        <Search size={21} color={'#000'} />
        <TextInput
          placeholder="Artists, songs, or podcasts"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.topGenres}>
        <Text style={styles.topGenresTitle}>Your top genres</Text>

        <View style={styles.topGenresList}>
          <View style={styles.topGenresCard}>
            <Text style={styles.topGenresCardText}>Pop</Text>
            <Image
              source={require('../../assets/images/spotify-images/img1.png')}
              style={styles.topGenresCardImage}
            />
          </View>
          <View style={styles.topGenresCard}>
            <Text style={styles.topGenresCardText}>Indie</Text>
            <Image
              source={require('../../assets/images/img1.jpg')}
              style={styles.topGenresCardImage}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  headerText: {
    fontWeight: 700,
    fontSize: 25,
    color: '#fff',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
  },
  headerTopWrapper: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  headerTopAvatar: {
    width: 32,
    height: 32,
    borderRadius: 999,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingRight: 30,
    backgroundColor: '#fff',
    marginTop: 22,
  },
  searchInput: {
    height: 46,
    borderRadius: 7,
    fontWeight: 500,
    fontSize: 16,
    color: '#131313',
  },
  topGenres: {
    marginVertical: 24,
  },
  topGenresTitle: {
    fontWeight: 600,
    fontSize: 16,
    color: '#fff',
  },
  topGenresList: {
    flexDirection: 'row',
    gap: 13,
    marginTop: 20,
  },
  topGenresCard: {
    borderRadius: 4,
    flex: 1,
    height: 109,
    backgroundColor: '#9854b2',
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 16,
  },
  topGenresCardImage: {
    width: 67,
    height: 67,
    transform: [{ rotate: '19.86deg' }, { translateY: 10 }, { translateX: 30 }],
  },
  topGenresCardText: {
    fontWeight: 700,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default SearchScreen;
