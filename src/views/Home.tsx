import {FlatList, Text} from 'react-native';
import MediaListItem from '../components/MediaListItem';
import {useMedia} from '../hooks/apiHooks';

const Home = () => {
  const {mediaArray} = useMedia();
  return (
    <>
      <Text>Files</Text>
      <FlatList
        data={mediaArray}
        renderItem={({item}) => <MediaListItem item={item} />}
      />
    </>
  );
};

export default Home;
