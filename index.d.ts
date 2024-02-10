import * as React from 'react';
import { ViewStyle } from 'react-native';

export interface LinearGradientProps {
  colors: string[] | number[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  useAngle?: boolean;
  angleCenter?: { x: number; y: number };
  angle?: number;
}

export interface StepsAsProps {
  index?: number;
  stepLabel?: string;
  prefix?: string;
  suffix?: string;
}

export interface MarkerProps {
  pressed?: boolean;
  pressedMarkerStyle?: ViewStyle;
  markerStyle?: ViewStyle;
  enabled?: boolean;
  currentValue?: number;
  valuePrefix?: string;
  valueSuffix?: string;
}

export interface LabelProps {
  oneMarkerValue?: string | number;
  twoMarkerValue?: string | number;
  minValue?: number;
  maxValue?: number;
  oneMarkerLeftPosition?: number;
  twoMarkerLeftPosition?: number;
  oneMarkerPressed?: boolean;
  twoMarkerPressed?: boolean;
}

export interface MultiSliderProps {
  values?: number[];
  onValuesChange?: Function;
  onValuesChangeStart?: Function;
  onValuesChangeFinish?: Function;
  gradientColors?: string[];
  sliderLength?: number;
  touchDimensions?: {
    height: number;
    width: number;
    borderRadius: number;
    slipDisplacement: number;
  };
  customMarker?: React.ElementType;
  customMarkerLeft?: React.ElementType;
  customMarkerRight?: React.ElementType;
  customLabel?: React.ElementType;
  isMarkersSeparated?: boolean;
  min?: number;
  max?: number;
  step?: number;
  stepsAs?: StepsAsProps[];
  optionsArray?: number[];
  containerStyle?: ViewStyle;
  trackStyle?: ViewStyle;
  selectedStyle?: ViewStyle;
  unselectedStyle?: ViewStyle;
  markerContainerStyle?: ViewStyle;
  markerStyle?: ViewStyle;
  pressedMarkerStyle?: ViewStyle;
  stepStyle?: ViewStyle;
  stepLabelStyle?: ViewStyle;
  stepMarkerStyle?: ViewStyle;
  valuePrefix?: string;
  valueSuffix?: string;
  showSteps?: boolean;
  showStepMarkers?: boolean;
  showStepLabels?: boolean;
  enabledOne?: boolean;
  enabledTwo?: boolean;
  onToggleOne?: Function;
  onToggleTwo?: Function;
  allowOverlap?: boolean;
  snapped?: boolean;
  smoothSnapped?: boolean;
  markerOffsetX?: number;
  markerOffsetY?: number;
  minMarkerOverlapDistance?: number;
  minMarkerOverlapStepDistance?: number;
  imageBackgroundSource?: string;
  enableLabel?: boolean;
  vertical?: boolean;
}

export interface LinearGradientComponent
  extends React.Component<LinearGradientProps> {}

export interface MultiSliderComponent
  extends React.Component<MultiSliderProps> {}
