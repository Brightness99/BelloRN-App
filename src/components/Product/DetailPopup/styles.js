import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default {
  popupOverlay: {
    position: 'absolute',
    padding: 20,
    paddingTop: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
  },
  popupModal: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    padding: 5,
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'center',
  },
  productImage: {
    margin: 10,
    width: '100%',
    height: '35%',
    resizeMode: 'contain',
  },

  productTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#EB9532',
    padding: 10,
  },
  productSeller: {
    fontSize: 14,
    color: '#26A65B',
  },
  productDescription: {
    color: '#666666',
  },
  reviews: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
  },
  reviewWrapper: {
    width: deviceWidth * 0.7,
  },
  btnWrapper: {
    padding: 0,
    flexDirection: 'row',
  },
  btnBuy: {
    flex: 1,
    backgroundColor: '#16A085',
    padding: 10,
    margin: 3,
    borderRadius: 4,
  },
  btnWishList: {
    flex: 1,
    backgroundColor: '#EB9532',
    padding: 10,
    margin: 3,
    borderRadius: 4,
  },
  btnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  closeBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#6C7A89',
    padding: 0,
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  closeBtnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
};
