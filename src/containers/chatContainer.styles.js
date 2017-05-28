import * as colors from '../constants/colors';

export default {
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  chatList: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 70,
    flexDirection: 'column',
  },
  chatSectionHeading: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  chatSectionText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
};
