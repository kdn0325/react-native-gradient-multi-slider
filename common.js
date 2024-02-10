// @flow

import React from 'react';
import { requireNativeComponent, View } from 'react-native';

const BVLinearGradient = requireNativeComponent('BVLinearGradient');

export default BVLinearGradient;

export type Point = { x: number, y: number };

type LinearGradientProps = {
  start?: Point,
  end?: Point,
  colors: Array<string>,
  locations?: Array<number>,
  useAngle?: boolean,
  angleCenter?: Point,
  angle?: number,
};

type ViewProps = React.ElementConfig<typeof View>;

export type Props = { ...LinearGradientProps, ...ViewProps };
