import { Camera, Search } from 'lucide-react-native';
import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Item = ({ title, color }: { title: string; color: string }) => (
  <View style={[styles.topGenresCard, { backgroundColor: color }]}>
    <Text
      style={styles.topGenresCardText}
      numberOfLines={2}
      ellipsizeMode="head"
    >
      {title}
    </Text>
    <Image
      source={require('../../assets/images/img9.png')}
      style={styles.topGenresCardImage}
    />
  </View>
);

const SearchScreen = () => {
  const onPress = () => {
    Alert.alert('Alert');
  };

  return (
    <ScrollView style={styles.container}>
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
          <FlatList
            data={cards}
            renderItem={({ item }) => (
              <Item title={item.title} color={item.color} />
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const cards = [
  { id: 1, title: 'Pop', color: '#ec4899' },
  { id: 2, title: 'Indie', color: '#d946ef' },
  { id: 3, title: 'News & Politics', color: '#a855f7' },
  { id: 4, title: 'Comedy', color: '#6366f1' },
  { id: 5, title: '2021 Wrapped', color: '#0369a1' },
  { id: 6, title: 'Podcasts', color: '#881337' },
  { id: 7, title: 'Made for you', color: '#111827' },
  { id: 8, title: 'Charts', color: '#65a30d' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingTop: 8,
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
    fontWeight: 700,
    fontSize: 16,
    color: '#fff',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 10,
  },
  topGenresCard: {
    borderRadius: 4,
    width: 170,
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
    maxWidth: 70,
    fontWeight: 700,
    fontSize: 16,
    color: '#fff',
  },

  topGenresList: {
    flexDirection: 'row',
    gap: 13,
    marginTop: 20,
  },

  item: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f9c2ff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
});

export default SearchScreen;
