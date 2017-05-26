// @flow
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

import NotificationItem from '../components/Notification/Item';
import ChatSectionHeading from '../components/Chat/SectionHeading';

import type { ProductsType } from '../types';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productList: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 100,
    flexDirection: 'column',
  },
};

class NotificationContainer extends React.Component {
  static renderRightButton = () => (
    <TouchableOpacity onPress={() => {}}>
      <Text style={{ color: '#D91E18' }}>Clear All</Text>
    </TouchableOpacity>
  );

  constructor(props: Object) {
    super(props);
    this.state = {
      notifications: [
        { id: 1, notification: 'Ada barang baru untuk pencarian iPhone 10', isRead: false },
        { id: 2, notification: 'Ada barang baru untuk pencarian baju koko', isRead: false },
        { id: 3, notification: 'Ada barang baru untuk pencarian celana renang', isRead: true },
      ],
    };

    this.clearNotifications = this.clearNotifications.bind(this);
  }

  state: {
    notifications: ProductsType,
  }

  clearNotifications: Function;

  clearNotifications() {
    this.setState({
      notifications: [],
    });
  }

  render() {
    const { notifications } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productList}>
          <ChatSectionHeading headingText={'Notifikasimu'} />
          {notifications.map(notification => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
          <View style={{ height: 150, width: '100%' }} />
        </ScrollView>
      </View>
    );
  }
}

export default NotificationContainer;
