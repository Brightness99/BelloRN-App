import React from 'react';
import { Provider, connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';

import store from '../src/store/configureStore';
import {
  HomeContainer,
  AuthContainer,
  ChatContainer,
  ProductContainer,
  CartContainer,
  AnalyticsContainer,
  RequestContainer,
} from '../src/containers';

const styles = {
  rootNavbar: {
    backgroundColor: '#FFFFFF',
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
  <Scene {...props} />
);

const SceneMenu = props => (
  <Scene
    {...props}
    titleStyle={{ fontWeight: 'bold', color: '#FFFFFF' }}
    navigationBarStyle={styles.homeNavbar}
    hideNavBar={false}
    renderBackButton={() => (null)}
  />
);

const SceneWithNavbar = props => (
  <Scene {...props} titleStyle={{ fontWeight: 'bold' }} hideNavBar={false} />
);

const MainRouter = () => (
  <Router>
    <Scene key="root" navigationBarStyle={styles.rootNavbar}>
      <SceneWithoutNavbar key="login" component={AuthContainer} title="login" hideNavBar />
      <SceneMenu key="home" component={HomeContainer} title="BELLO" hideNavBar={false} />
      <SceneWithNavbar key="chat" component={ChatContainer} title="Bello" />
      <SceneWithNavbar key="chat" component={ChatContainer} title="BELLO" />
      <SceneWithNavbar key="product" component={ProductContainer} title="PRODUCT" />
      <SceneWithNavbar key="cart" component={CartContainer} title="CART" />
      <SceneWithNavbar key="analytics" component={AnalyticsContainer} title="ANALISA" />
      <SceneWithNavbar key="request" component={RequestContainer} title="REQUEST" />
    </Scene>
  </Router>
);

const mapStateToProps = state => ({ scene: state.scene });

const ConnectedRouter = connect(mapStateToProps, null)(MainRouter);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter />
  </Provider>
);

export default App;
