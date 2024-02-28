import React from 'react';
import {Image, Text, Touchable, TouchableOpacity} from 'react-native';
import {MediaItemWithOwner} from '../types/DBTypes';

const MediaListItem = ({item}: {item: MediaItemWithOwner}) => {
  return (
    <TouchableOpacity ({item}: {item: MediaItemWithOwner})>
      <Image style={{height: 300}} source={{uri: item.thumbnail}} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};
export default MediaListItem;
