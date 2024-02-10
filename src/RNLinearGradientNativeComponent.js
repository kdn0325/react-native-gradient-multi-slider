import { ViewPropTypes } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import { ColorPropType } from 'react-native';
import PropTypes from 'prop-types';

const RNLinearGradient = codegenNativeComponent('RNLinearGradient');

RNLinearGradient.propTypes = {
  ...ViewPropTypes,
  startPoint: PropTypes.arrayOf(PropTypes.number),
  endPoint: PropTypes.arrayOf(PropTypes.number),
  colors: PropTypes.arrayOf(ColorPropType).isRequired,
  locations: PropTypes.arrayOf(PropTypes.number),
  useAngle: PropTypes.bool,
  angleCenter: PropTypes.arrayOf(PropTypes.number),
  angle: PropTypes.number,
  borderRadii: PropTypes.arrayOf(PropTypes.number),
};

export default RNLinearGradient;
