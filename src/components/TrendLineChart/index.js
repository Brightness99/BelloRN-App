// @flow
import React from 'react';
import { View, Text as RNText, Dimensions, Animated, Easing } from 'react-native';
import * as d3 from 'd3';
import moment from 'moment';
import Svg, {
    // Circle,
    // Ellipse,
    G,
    // LinearGradient,
    // RadialGradient,
    // Line,
    // Path,
    // Polygon,
    // Polyline,
    Rect,
    // Symbol,
    Text,
    // Use,
    // Defs,
    // Stop
} from 'react-native-svg';

import MessageBubble from '../../components/Chat/MessageBubble';
import OrangeButton from '../../components/Core/OrangeButton';
import RedButton from '../../components/Core/RedButton';
import * as colors from '../../constants/colors';

const deviceWidth = Dimensions.get('window').width;
const svgWidth = deviceWidth * 0.86;
const svgHeight = 200;

const styles = {
  chartContainer: {
    flex: 1,
    marginBottom: 15,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    paddingBottom: 35,
    borderBottomWidth: 1,
  },
  topicTitle: {
    color: colors.darkGrey,
    fontSize: 18,
    margin: 10,
  },
  svgContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 10,
    // elevation: 1,
  },
  svgWrapper: {
    // flex: 1,
    width: svgWidth,
    height: svgHeight,
    padding: 10,
  },
};

class TrendLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: [
        { id: 1, frequency: 5, month: 'Jan' },
        { id: 2, frequency: 6, month: 'Feb' },
        { id: 3, frequency: 9, month: 'Mar' },
        { id: 4, frequency: 10, month: 'Apr' },
        { id: 5, frequency: 12, month: 'May' },
        { id: 6, frequency: 1, month: 'Jun' },
        { id: 7, frequency: 2, month: 'Jul' },
        { id: 8, frequency: 3, month: 'Aug' },
        { id: 9, frequency: 5, month: 'Sep' },
        { id: 10, frequency: 8, month: 'Oct' },
        { id: 11, frequency: 10, month: 'Nov' },
        { id: 12, frequency: 12, month: 'Dec' },
      ],
      isCollapsed: false,
      collapsibleMinHeight: 0,
      collapsibleMaxHeight: 350,
      animation: new Animated.Value(),
    };

    this.collapseChart = this.collapseChart.bind(this);
  }

  collapseChart() {
    const {
      isCollapsed,
      collapsibleMinHeight,
      collapsibleMaxHeight,
      animation,
    } = this.state;
    const startVal = !isCollapsed ? collapsibleMinHeight : collapsibleMaxHeight;
    const endVal = isCollapsed ? collapsibleMaxHeight : collapsibleMinHeight;

    animation.setValue(startVal);
    Animated.timing(animation, {
      toValue: endVal,
      duration: 1500,
      easing: Easing.bounce,
    }).start();
    this.setState({
      isCollapsed: !isCollapsed,
      // collapsibleMaxHeight: maxHeight,
    });
    console.log(animation);
  }

  render() {
    const { dataset, isCollapsed } = this.state;
    const frequencies = dataset.map(data => data.frequency);
    const maxData = d3.max(frequencies);
    const yScale = d3.scaleLinear()
      .domain([0, maxData])
      .range([0, svgHeight]);
    return (
      <View style={styles.chartContainer}>
        <RNText style={styles.topicTitle}>Iphone 10 Searches Trends</RNText>
        <Animated.View style={{ height: this.state.animation }}>
          { !isCollapsed && (
            <View>
              <View style={styles.svgContainer}>
                <Svg style={styles.svgWrapper}>
                  { dataset.map((data, index) => (
                    <G key={data.id}>
                      <Rect
                        x={index * ((svgWidth / 13) + 2)}
                        y={svgHeight - yScale(data.frequency)}
                        width={svgWidth / 13}
                        height={yScale(data.frequency)}
                        fill={data.frequency <= maxData / 3 ? '#C0392B' : (data.frequency <= maxData / 2 ? '#EB9532' : '#16A085')}
                      />
                      <Text
                        x={(index * ((svgWidth / 13) + 2)) + 6}
                        y={svgHeight - 12}
                        fill="#FFFFFF"
                        textAnchor="start"
                        fontSize="8"
                      >
                        { data.month }
                      </Text>
                      <Text
                        x={(index * ((svgWidth / 13) + 2)) + 5}
                        y={svgHeight - yScale(data.frequency)}
                        width={svgWidth / 13}
                        fill="#FFFFFF"
                        textAnchor="middle"
                        fontSize="8"
                        fontWeight="bold"
                      >
                        { data.frequency }
                      </Text>
                    </G>
                  ))}
                  <Text
                    x="5"
                    y="5"
                    fill={colors.darkGrey}
                    fontWeight="bold"
                    fontSize="20"
                  >
                  2017
                </Text>
                </Svg>
              </View>
              <MessageBubble
                sender="Bello"
                message="Bello saranin sih bos coba jualan iPhone 10. Baru ada 15 barang yang dijual lho!"
                time={moment().format('DD-MM-YYYY HH:mm')}
              />
            </View>
          )}
        </Animated.View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <OrangeButton
            label={isCollapsed ? 'Munculkan Chart' : 'Sembunyikan Chart'}
            handleClick={this.collapseChart}
          />
          <RedButton label="Hapus Analisa" />
        </View>
      </View>
    );
  }
}

export default TrendLineChart;
