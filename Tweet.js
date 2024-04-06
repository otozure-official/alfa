// Tweet.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Tweet = ({picture, title, content }) => {
  return (
    <View style={styles.tweetContainer}>
      {/* 写真 */}
      <View alignItems='center'>
      <Image source=  {require('./assets/2.png')} 
      style={styles.avatar} resizeMode='contain'/>
      </View>

      {/* タイトル */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      {/* コンテンツ */}
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetContainer: {
    flexDirection: 'column',
    padding: 20,
    borderBottomWidth: 1,
    borderRadius: 100,
    borderColor: '#ccc',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 5,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  contentText: {
    fontSize: 20,
    color: '#555',
  },
});

export default Tweet;
