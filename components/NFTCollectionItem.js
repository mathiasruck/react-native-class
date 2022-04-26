import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class NFTCollectionItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.imageUri }} style={styles.image} />
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  title:{
    fontWeight: "bold"
  },
  container:{
    flexDirection: "row",
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 0
  },
  image:{
    width: 30,
    height: 30,
    marginRight:6
  }
});

export default NFTCollectionItem;
