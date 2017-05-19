export default {
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatList: {
    flex: 1,
    width: '100%',
    padding: 0,
    paddingTop: 100,
    flexDirection: 'column',
  },
  chatBubbleContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 10,
  },
  chatAvatar: {
    width: '20%',
    height: 55,
    paddingLeft: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  chatAvatarImage: {
    flex: 1,
    alignSelf: 'flex-start',
    marginTop: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 100,
  },
  chatMessage: {
    flexDirection: 'column',
    width: '70%',
  },
  chatBubble: {
    marginTop: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 5,
    elevation: 1,
    flexDirection: 'row',
  },
  productCardImage: {
    flex: 0.3,
  },
  productCardContent: {
    flex: 0.7,
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#EB9532',
  },
  productSeller: {
    fontSize: 14,
    color: '#26A65B',
  },
  productDescription: {
    color: '#666666',
  },
  chatSearchContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  chatInput: {
    paddingLeft: 30,
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
  },
  chatInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingBottom: 5,
  },
  senderName: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  messageTime: {
    color: '#F5F5F5',
    fontSize: 12,
  },
};
