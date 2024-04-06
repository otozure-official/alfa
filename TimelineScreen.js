// TimelineScreen.js

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Tweet from './Tweet'; // 上記で作成したTweetコンポーネントをインポート
import { Header } from './src/Header'
import {Footer} from './src/Footer'

const TimelineScreen = () => {
  const tweets = [
    { id: '1', picture: './assets/1.png', title: '緑黄色社会 ブレス',content: '緑黄色社会の最高傑作！' },
    { id: '2', picture: './assets/2.png', title: 'リョクシャ化計画20232024',content: 'Tweet 2 content' },
    // 他のつぶやきも追加...
  ];

  return (
    <View style={styles.container}>
      {/* ヘッダー */}
      <Header />
      {/* 真ん中の部分 */}
      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Tweet picture={item.picture} title={item.title} content={item.content} />}
      />

      {/* フッター */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default TimelineScreen;
