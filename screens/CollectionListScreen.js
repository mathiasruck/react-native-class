import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import NFTCollectionItem from '../components/NFTCollectionItem';

const NFT_COLLETIONS = [
  {
    key: 1,
    image: 'https://picsum.photos/250',
    title: 'Example 1',
    description: 'Lorem impsum',
  },
  {
    key: 2,
    image: 'https://picsum.photos/250',
    title: 'Example 2',
    description: 'Lorem impsum',
  },
  {
    key: 3,
    image: 'https://picsum.photos/250',
    title: 'Example 3',
    description: 'Lorem impsum',
  },
  {
    key: 4,
    image: 'https://picsum.photos/250',
    title: 'Example 4',
    description: 'Lorem impsum',
  },
  {
    key: 5,
    image: 'https://picsum.photos/250',
    title: 'Example 5',
    description: 'Lorem impsum',
  },
  {
    key: 6,
    image: 'https://picsum.photos/250',
    title: 'Example 6',
    description: 'Lorem impsum',
  },
  {
    key: 7,
    image: 'https://picsum.photos/250',
    title: 'Example 7',
    description: 'Lorem impsum',
  },
  {
    key: 8,
    image: 'https://picsum.photos/250',
    title: 'Example 8',
    description: 'Lorem impsum',
  },
  {
    key: 9,
    image: 'https://picsum.photos/250',
    title: 'Example 9',
    description: 'Lorem impsum',
  },
  {
    key: 10,
    image: 'https://picsum.photos/250',
    title: 'Example 10',
    description: 'Lorem impsum',
  },
  {
    key: 11,
    image: 'https://picsum.photos/250',
    title: 'Example 11',
    description: 'Lorem impsum',
  },
  {
    key: 12,
    image: 'https://picsum.photos/250',
    title: 'Example 12',
    description: 'Lorem impsum',
  },
  {
    key: 13,
    image: 'https://picsum.photos/250',
    title: 'Example 13',
    description: 'Lorem impsum',
  },
  {
    key: 14,
    image: 'https://picsum.photos/250',
    title: 'Example 14',
    description: 'Lorem impsum',
  },
];

// 1. Create a component called NFTCOllectionItem
// 2. NFTCollectionItem has the following attributes (image, title, description)

class CollectionListScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {NFT_COLLETIONS.map(element => {
          return (
            <NFTCollectionItem
              key={element.key}
              title={element.title}
              imageUri={element.image}
              description={element.description}
            />
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 2,
  },
});

export default CollectionListScreen;
