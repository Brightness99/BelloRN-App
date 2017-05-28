// @flow
import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import NotificationItem from '../components/Notification/Item';
import ChatSectionHeading from '../components/Chat/SectionHeading';
import HeadingDescription from '../components/Core/HeadingDescription';
import SceneMessage from '../components/Core/SceneMessage';

import { getNotificationData } from '../actions/notification';
import { getReminderRecommendation } from '../actions/recommendation';

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

class NotificationContainer extends React.Component {
  constructor(props: Object) {
    super(props);
    this.clearNotifications = this.clearNotifications.bind(this);
  }


  componentDidMount = () => {
    this.props.getNotificationData({
      user_id: this.props.userdata.id,
    });
  }


  clearNotifications: Function;


  clearNotifications() {
    this.setState({
      notifications: [],
    });
  }

  showRecommendation = (keyword) => {
    Actions.chat();
    this.props.getReminderRecommendation({
      user_id: this.props.userdata.id,
      keyword,
    });
  }

  render() {
    const notifications = this.props.result;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.productList}>
          <ChatSectionHeading headingText={'Notifikasimu'} />
          <HeadingDescription text={'List barang yang kamu request dan akan direminder oleh Bello'} />
          { notifications.length < 1 && (
            <SceneMessage>
              Kamu belum punya notifikasi yang belum dibaca
            </SceneMessage>) }
          <View style={{ height: 30 }} />
          {
            (
              (notifications.length > 0) &&
              notifications.map(notification => (
                <NotificationItem
                  key={notification.keyword}
                  {...notification}
                  showRecommendation={() => { this.showRecommendation(notification.keyword); }}
                />
              ))
            ) || (
              (this.props.isFetching) &&
              <ActivityIndicator size="large" color="#3498db" style={{ paddingTop: 30 }} />
            )
          }
          <View style={{ height: 150, width: '100%' }} />
        </ScrollView>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  getNotificationData: requestData => dispatch(getNotificationData(requestData)),
  getReminderRecommendation: requestData => dispatch(getReminderRecommendation(requestData)),
});

const mapStateToProps = state => ({
  isFetching: state.notification.isFetching,
  result: state.notification.result,
  userdata: state.userdata.result,
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
