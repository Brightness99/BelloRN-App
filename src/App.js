import React from 'react';
import { Provider, connect } from 'react-redux';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import OneSignal from 'react-native-onesignal';

import store from '../src/store/configureStore';
import * as colors from './constants/colors';
import {
  SplashContainer,
  HomeContainer,
  AuthContainer,
  ChatContainer,
  ProductContainer,
  CartContainer,
  AnalyticsContainer,
  ManageAnalyticsContainer,
  RequestContainer,
  ProfileContainer,
  NotificationContainer,
} from '../src/containers';

const styles = {
  rootNavbar: {
    backgroundColor: '#3498DB',
    borderBottomColor: 'transparent',
    elevation: 2,
  },
  homeNavbar: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    elevation: 0,
  },
};

const SceneWithoutNavbar = props => (
  <Scene
    {...props}
    renderBackButton={() => (null)}
  />
);

const SceneMenu = props => (
  <Scene
    {...props}
    titleStyle={{ fontWeight: 'bold', color: '#FFFFFF' }}
    navigationBarStyle={styles.homeNavbar}
    renderBackButton={() => (null)}
  />
);

const SceneWithNavbar = props => (
  <Scene {...props} titleStyle={{ fontWeight: 'bold' }} hideNavBar={false} />
);

const MainRouter = () => (
  <Router>
    <Scene key="root" navigationBarStyle={styles.rootNavbar} titleStyle={{ fontWeight: 'bold', color: '#FFFFFF' }} barButtonIconStyle={{ tintColor: colors.white }}>
      <SceneWithoutNavbar key="splash" component={SplashContainer} title="splash" hideNavBar />
      <SceneWithoutNavbar key="login" component={AuthContainer} title="login" hideNavBar />
      <SceneMenu key="home" component={HomeContainer} title="BELLO" hideNavBar={false} panHandlers={null} renderBackButton={() => (null)} type={ActionConst.RESET} />
      <SceneWithNavbar key="chat" component={ChatContainer} title="Bello" />
      <SceneWithNavbar key="chat" component={ChatContainer} title="BELLO" />
      <SceneWithNavbar key="product" component={ProductContainer} title="PRODUCT" />
      <SceneWithNavbar key="cart" component={CartContainer} title="CART" />
      <SceneWithNavbar key="analytics" component={AnalyticsContainer} title="ANALISA" />
      <SceneWithNavbar key="manageAnalytics" component={ManageAnalyticsContainer} title="PENGATURAN" />
      <SceneWithNavbar key="request" component={RequestContainer} title="REQUEST" />
      <SceneWithNavbar key="profile" component={ProfileContainer} title="PROFILE" />
      <SceneWithNavbar key="notification" component={NotificationContainer} title="NOTIFICATION" />
    </Scene>
  </Router>
);

const mapStateToProps = state => ({ scene: state.scene });

const ConnectedRouter = connect(mapStateToProps, null)(MainRouter);

class App extends React.Component {
  componentWillMount() {
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.addEventListener('opened', this.onNotificationOpened);
  }

  componentDidMount() {
    OneSignal.configure({});
  }

  onNotificationOpened(message, data, isActive) {
    if (isActive) {
      // Actions.notification();
    } else {
      setTimeout(Actions.notification, 2000);
    }
  }

  onIds(device) {
    const onesignalId = device.userId;
    // TODO update user's onesignalID
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter />
      </Provider>
    );
  }
}

export default App;
