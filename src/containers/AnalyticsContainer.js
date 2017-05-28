// @flow
import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import TrendLineChart from '../components/TrendLineChart';
import ChatSectionHeading from '../components/Chat/SectionHeading';
import HeadingDescription from '../components/Core/HeadingDescription';
import ActionSuccessInfo from '../components/Core/ActionSuccessInfo';
import FooterActionButton from '../components/FooterActionButton';

import { getAnalyticsData, deleteSubscribe } from '../actions/analytics';

import * as colors from '../constants/colors';

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
  },
  list: {
    flex: 1,
    width: '100%',
    padding: 20,
    paddingTop: 0,
    flexDirection: 'column',
  },
};

class AnalyticsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analytics: [],
      successInfo: false,
      successInfoMessage: '',
    };

    this.deleteChart = this.deleteChart.bind(this);
  }


  componentDidMount = () => {
    this.props.getAnalyticsData({ user_id: this.props.userdata.id });
  }


  deleteChart(chartId) {
    this.props.deleteSubscribe(chartId, this.props.userdata.id);

    this.setState({
      successInfo: true,
      successInfoMessage: 'Analisa sukses Dihapus!',
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
    const charts = this.props.result;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          <ChatSectionHeading headingText={'List Analisa'} />
          <HeadingDescription text={'Kamu Belum Punya Analisa Barang Apapun. Mulai analisa tren sekarang!'} />
          {
            (
              (charts.length > 0) &&
              charts.map(chart => (
                <TrendLineChart
                  key={chart.id}
                  {...chart}
                  deleteChart={() => { this.deleteChart(chart.id); }}
                />
              ))
            ) || (
              (this.props.isFetching) &&
              <ActivityIndicator size="large" color="#3498db" style={{ paddingTop: 30 }} />
            )
          }
        </ScrollView>
        <FooterActionButton text="+ Tambah Analisa Baru" handlePress={Actions.manageAnalytics} />
        { this.renderSuccessInfo() }
      </View>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  getAnalyticsData: requestData => dispatch(getAnalyticsData(requestData)),
  deleteSubscribe: (id, userId) => dispatch(deleteSubscribe(id, userId)),
});

const mapStateToProps = state => ({
  isFetching: state.analytics.isFetching,
  result: state.analytics.result,
  userdata: state.userdata.result,
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsContainer);
