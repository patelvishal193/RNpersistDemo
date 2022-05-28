import React from 'react';
import Svg, {
  Path,
  G,
  Circle,
  Rect,
  Line,
  Text,
  Defs,
  TSpan,
  Image,
  Use,
  Mask,
  Polygon,
  Ellipse,
  LinearGradient,
  Stop,
  Pattern,
  // ClipPath,
} from 'react-native-svg';

export const DrawerSymbol = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    style={{
      enableBackground: "new 0 0 16 16",
    }}
    xmlSpace="preserve"
    width={20}
    height={20}
    {...props}
  >
    <Path d="M0 0h16v2H0zM0 7h16v2H0zM0 14h16v2H0z" fill="white"/>
  </Svg>
);
export const BackSymbol = props => (
  <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path opacity={0.87} d="M-6-2h24v24H-6z" />
      <Path
        d="M10.62.99a1.25 1.25 0 0 0-1.77 0L.54 9.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L3.38 10l7.25-7.25c.48-.48.48-1.28-.01-1.76Z"
        fill="#fff"
      />
    </G>
  </Svg>
);
export const NotificationSymbol = props => (
  <Svg
    id="Icons"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 32 32"
    style={{
      enableBackground: 'new 0 0 32 32',
    }}
    xmlSpace="preserve"
    width={24}
    height={24}
    {...props}>
    <Path
      className="st1"
      fill="#fff"
      strokeWidth={3}
      d="M26 21.5 25 20c-1.6-2.4-2.4-5.3-2.4-8.2 0-3.1-2-5.7-4.7-6.5C17.6 4.5 16.8 4 16 4s-1.6.5-1.9 1.3c-2.7.8-4.7 3.4-4.7 6.5 0 2.9-.8 5.8-2.4 8.2l-1 1.5c-.4.7 0 1.5.8 1.5h18.3c.8 0 1.3-.9.9-1.5zM19 26c0 1.7-1.3 3-3 3s-3-1.3-3-3"
    />
  </Svg>
);
export const SearchSymbol = props => (
  <Svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Rect opacity={0.07} width={32} height={32} rx={16} fill="#fff" />
    <Path
      d="M14.83 19.502a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334ZM21.83 21.831l-3.733-3.733"
      stroke="#000"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const DownSymbol = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8 9.724 4.39-4.39a.667.667 0 1 1 .944.942L8 11.61 2.667 6.276a.667.667 0 0 1 .943-.943L8 9.723Z"
      fill="#79767D"
    />
  </Svg>
);
export const EditSymbol = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#42b2fc"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-edit"
    width={20}
    height={20}
    {...props}
  >
    <Path  d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
    <Path d="m18 2 4 4-10 10H8v-4L18 2z" />
  </Svg>
);
export const CameraSymbol = props => (
  <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-2-2h24v24H-2z" />
      <Path
        d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm8-11c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3.17L6.4.65C6.78.24 7.32 0 7.88 0h4.24c.56 0 1.1.24 1.47.65L14.83 2H18Zm-8 13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5Z"
        fill="#000"
      />
    </G>
  </Svg>
);
export const DeleteSymbol = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 58.67"
    width={20}
    height={20}
    {...props}
  >
    <Defs></Defs>
    <G id="Layer_2" data-name="Layer 2">
      <G id="Layer_1-2" data-name="Layer 1">
        <Path
          className="cls-1"
          fill='#FF0000'
          d="M61.33 5.33H48V2.67A2.66 2.66 0 0 0 45.33 0H18.67A2.66 2.66 0 0 0 16 2.67v2.66H2.67a2.67 2.67 0 0 0 0 5.34H8v40a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-40h5.33a2.67 2.67 0 1 0 0-5.34ZM50.67 50.67A2.67 2.67 0 0 1 48 53.33H16a2.67 2.67 0 0 1-2.67-2.66v-40h37.34Z"
        />
        <Path
          className="cls-1"
          fill='#FF0000'
          d="M24 45.33a2.67 2.67 0 0 0 2.67-2.66V21.33a2.67 2.67 0 0 0-5.34 0v21.34A2.67 2.67 0 0 0 24 45.33ZM40 45.33a2.67 2.67 0 0 0 2.67-2.66V21.33a2.67 2.67 0 0 0-5.34 0v21.34A2.67 2.67 0 0 0 40 45.33Z"
        />
      </G>
    </G>
  </Svg>
);