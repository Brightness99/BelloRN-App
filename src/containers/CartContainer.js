// @flow
import React from 'react';
import { View, ScrollView, Linking, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import ChatSectionHeading from '../components/Chat/SectionHeading';
import HeadingDescription from '../components/Core/HeadingDescription';
import ActionSuccessInfo from '../components/Core/ActionSuccessInfo';
import ProductItem from '../components/Product/Item';
import FooterActionButton from '../components/FooterActionButton';

// Redux Actions
import { getCart } from '../actions/cart';

import * as colors from '../constants/colors';
import type { ProductsType } from '../types';

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productList: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 60,
    flexDirection: 'column',
  },
};

class CartContainer extends React.Component {
  constructor(props: Object) {
    super(props);
    this.state = {
      carts: [],
      successInfo: false,
      successInfoMessage: '',
    };

    this.openBukalapakWeb = this.openBukalapakWeb.bind(this);
    this.deleteCart = this.deleteCart.bind(this);
  }

  state: {
    carts: ProductsType,
  }


  componentDidMount = () => {
    this.props.getCart({
      user_id: this.props.userdata.id,
      token: this.props.userdata.token,
    });
  }


  componentWillReceiveProps = (nextProps) => {
    if (this.props.isFetching && !nextProps.isFetching) {
      this.setState({
        carts: nextProps.result.length > 0 ? nextProps.result : [],
      });
    }
  }


  openBukalapakWeb = () => {
    const url = 'https://www.bukalapak.com/cart/carts';
    Linking.openURL(url).catch((err) => {});
  }

  deleteCart() {
    this.setState({
      successInfo: true,
      successInfoMessage: 'Barang di Cart Sukses Dihapus!',
    });
    setTimeout(() => this.setState({
      successInfo: false,
      successInfoMessage: '',
    }), 2000);
  }

  renderSuccessInfo() {
    const { successInfo, successInfoMessage } = this.state;

    if (successInfo) {
      return (
        <ActionSuccessInfo label={successInfoMessage} />
      );
    }
    return null;
  }

  render() {
    const { carts } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productList}>
          <ChatSectionHeading headingText={'Keranjang Belanja'} />
          <HeadingDescription text={'Keranjang belanja otomatis masuk ke keranjang belanja akun Bukalapak kamu. Checkout untuk masuk ke pembayaran melalui bukalapak'} />
          <View style={{ height: 30 }} />
          {
            (
              (carts.length > 0) &&
              carts.map(product => (
                <ProductItem
                  key={product.id}
                  {...product}
                  toggleDetailModal={() => {}}
                  inCart
                  deleteCart={this.deleteCart}
                />
              ))
            ) ||
            <ActivityIndicator size="large" color="#3498db" style={{ paddingTop: 30 }} />
          }
          <View style={{ height: 150, width: '100%' }} />
        </ScrollView>
        <FooterActionButton text="CHECKOUT" handlePress={this.openBukalapakWeb} />
        { this.renderSuccessInfo() }
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCart: requestData => dispatch(getCart(requestData)),
});

const mapStateToProps = state => ({
  isFetching: state.cart.isFetching,
  result: state.cart.result,
  userdata: state.userdata.result,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
