import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default {
  productRecommendations: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
  },
  productRecWrapper: {
    width: deviceWidth * 0.9,
  },
  productRecWrapperMore: {
    width: deviceWidth * 0.9,
  },
};
