import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Provider, connect } from 'react-redux';
import {Scene, Router} from 'react-native-router-flux';

import store from './src/store/configureStore';
import HomeContainer from './src/containers/HomeContainer';
import AuthContainer from './src/containers/AuthContainer';
import ChatContainer from './src/containers/ChatContainer';
import ProductContainer from './src/containers/ProductContainer';
import CartContainer from './src/containers/CartContainer';
import AnalyticsContainer from './src/containers/AnalyticsContainer';

const MainRouter = () => (
  <Router>
    <Scene key='root' navigationBarStyle={{backgroundColor: '#FFFFFF', borderBottomColor: 'transparent', elevation: 2 }}>
      <Scene key='login' component={AuthContainer} title="login" hideNavBar={true} />
      <Scene key='home' component={HomeContainer} title="BELLO" titleStyle={{ fontWeight: 'bold', color: '#FFFFFF' }} navigationBarStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent', elevation: 0 }} hideNavBar={false} renderBackButton={() => (null)} />
      <Scene key='chat' component={ChatContainer} title="BELLO" titleStyle={{ fontWeight: 'bold' }} hideNavBar={false} />
      <Scene key='product' component={ProductContainer} title="PRODUCT" titleStyle={{ fontWeight: 'bold' }} hideNavBar={false} />
      <Scene key='cart' component={CartContainer} title="CART" titleStyle={{ fontWeight: 'bold' }} hideNavBar={false} />
      <Scene key='analytics' component={AnalyticsContainer} title="ANALISA" titleStyle={{ fontWeight: 'bold' }} hideNavBar={false} />
    </Scene>
  </Router>
);

const mapStateToProps = state =>  ({ scene: state.scene });

const ConnectedRouter = connect(mapStateToProps, null)(MainRouter);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter />
      </Provider>
    );
  }
}
