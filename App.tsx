import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

const DATA = Array.from({length: 1000}, (v, i) => i);

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 32}}>
      <FlashList
        data={DATA}
        renderItem={({item}) => (
          <View
            key={item}
            style={{
              justifyContent: 'center',
              height: 46,
              marginBottom: 8,
            }}>
            <Text>{item}</Text>
          </View>
        )}
        estimatedItemSize={1000}
      />
    </SafeAreaView>
  );
};

export default App;
