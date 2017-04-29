import React from 'react';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

const SampleBarChart = () => (
  <Svg preserveAspectRatio="xMinYMin meet" style={{width: '100%', height: '84%', padding: 0, backgroundColor: 'transparent'}}>
    <G fill="none" font-size="10" font-family="sans-serif" text-anchor="end">
      <Path class="domain" stroke="#000" d="M-6,300.5H0.5V0.5H-6"></Path>
      <G class="tick" opacity="1" transform="translate(0,300)">
        <Line stroke="#000" x2="-6" y1="0.5" y2="0.5"></Line>
        <Text fill="#000" x="-9" y="0.5" dy="0.32em">0</Text>
      </G>
      <G class="tick" opacity="1" transform="translate(0,240)">
        <Line stroke="#000" x2="-6" y1="0.5" y2="0.5"></Line>
        <Text fill="#000" x="-9" y="0.5" dy="0.32em">5</Text>
      </G>
      <G class="tick" opacity="1" transform="translate(0,180)">
        <Line stroke="#000" x2="-6" y1="0.5" y2="0.5"></Line>
        <Text fill="#000" x="-9" y="0.5" dy="0.32em">10</Text>
      </G>
      <G class="tick" opacity="1" transform="translate(0,120)">
        <Line stroke="#000" x2="-6" y1="0.5" y2="0.5"></Line>
        <Text fill="#000" x="-9" y="0.5" dy="0.32em">15</Text>
      </G>
      <G class="tick" opacity="1" transform="translate(0,60)">
        <Line stroke="#000" x2="-6" y1="0.5" y2="0.5"></Line>
        <Text fill="#000" x="-9" y="0.5" dy="0.32em">20</Text>
      </G>
      <G class="tick" opacity="1" transform="translate(0,0)">
        <Line stroke="#000" x2="-6" y1="0.5" y2="0.5"></Line>
        <Text fill="#000" x="-9" y="0.5" dy="0.32em">25</Text>
      </G>
    </G>
    <G fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" transform="translate(0,300)">
    </G>

    <Rect fill="#96281B" x="51" width="33" y="240" height="60"></Rect>
    <Rect fill="#1BBC9B" x="0" width="33" y="0" height="300"></Rect>
    <Rect fill="#EB9532" x="102" width="33" y="180" height="120"></Rect>
    <Rect fill="#EB9532" x="153" width="33" y="144" height="156"></Rect>
    <Rect fill="#1BBC9B" x="204" width="33" y="72" height="228"></Rect>
    <Rect fill="#1BBC9B" x="255" width="33" y="48" height="252"></Rect>
    <Rect fill="#3498DB" x="306" width="33" y="0" height="300"></Rect>
    <Rect fill="#3498DB" x="657" width="33" y="36" height="264"></Rect>
    <Rect fill="#3498DB" x="758" width="33" y="84" height="216"></Rect>
    <Rect fill="#3498DB" x="859" width="33" y="120" height="180"></Rect>
  </Svg>
);

export default SampleBarChart;
