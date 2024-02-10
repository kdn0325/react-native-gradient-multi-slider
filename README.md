# react-native-gradient-multi-slider

Pure JS react native slider component with one or two markers.
Options to customize track, touch area and provide customer markers and callbacks for touch events and value changes.

## Examples

```
cd example/Basic
npm install
react-native run-ios
react-native run-android
```
![Example](https://github.com/kdn0325/react-native-gradient-multi-slider/assets/91298955/ac39fff7-8ece-4488-a383-77da06a66f77)

## Getting Started

- [Installation](#installation)

### Installation

```bash
$ npm install --save react-native-gradient-multi-slider
$ yarn add -D react-native-gradient-multi-slider
```

### Usage in a ScrollView

```js
import MultiSlider from 'react-native-gradient-multi-slider';

<MultiSlider
    sliderLength={250}
    min={0}
    max={12}
    step={1}
/>
```
### shape up CustomMarker as left and right

In order to make different styles on markers you can set isMarkersSeparated to true, define customMarkerLeft and customMarkerRight in MultiSlider. for example:


```js
<MultiSlider
    ...
    isMarkersSeparated={true}

    customMarkerLeft={(e) => {
         return (<CustomSliderMarkerLeft
          currentValue={e.currentValue}/>)
    }}

    customMarkerRight={(e) => {
         return (<CustomSliderMarkerRight
         currentValue={e.currentValue}/>)
    }}
/>
```

### Partial report of the props
Feel free to contribute to this part of the documentation.


| Prop Name            | Default | Type    | Purpose                                  |
|----------------------|---------|---------|------------------------------------------|
| values               | [0]     | Array   | Prefixed values of the slider            |
| gradientColors       | #...    | Array   | Gradient colors for slider track         |
| onValuesChangeStart  | () => {}| Function| Callback when value starts changing      |
| onValuesChange       | () => {}| Function| Callback when value changes              |
| onValuesChangeFinish| () => {}| Function| Callback when value stops changing       |
| sliderLength         | 280     | Number  | Length of the slider                     |
| touchDimensions      | {...}   | Object  | Touch dimensions configuration           |
| enableLabel          |         | Function| Enable label rendering                   |
| customLabel          |         | Function| Component for rendering label above      |
| customMarker         |         | Function| Component for cursor                     |
| customMarkerLeft     |         | Function| Component for left cursor                |
| customMarkerRight    |         | Function| Component for right cursor               |
| isMarkersSeparated   |         | Boolean | Explanation in README.md                |
| min                  | 0       | Number  | Minimum value available in slider        |
| max                  | 10      | Number  | Maximum value available in slider        |
| step                 | 1       | Number  | Step value of slider                     |
| optionsArray         |         | Array   | Possible values of slider                |
| Styles               | {...}   | Style   | Slider styles                            |
| valuePrefix          |         | String  | Prefix added to value                    |
| valueSuffix          |         | String  | Suffix added to value                    |
| enabledOne           | true    | Boolean | Enables first cursor                     |
| enabledTwo           | true    | Boolean | Enables second cursor                    |
| stepsAs              | []      | Array   | Customize step labels                    |
| showSteps            | false   | Boolean | Show steps                               |
| showStepMarkers      | true    | Boolean | Show step markers on track               |
| showStepLabels       | true    | Boolean | Show step labels underneath track        |
| onToggleOne          |         | Function| Listener when first cursor toggles       |
| onToggleTwo          |         | Function| Listener when second cursor toggles      |
| allowOverlap         | false   | Boolean | Allow overlap within cursors             |
| snapped              | false   | Boolean | Fixed position for markers               |
| smoothSnapped        | false   | Boolean | Snap to nearest marker on release        |
| vertical             | false   | Boolean | Use vertical orientation                 |
| markerOffsetX        | 0       | Number  | Offset cursor(s) on X axis               |
| markerOffsetY        | 0       | Number  | Offset cursor(s) on Y axis               |
| markerSize           | 0       | Number  | Marker margin from track edges           |
| minMarkerOverlap...  | 0       | Number  | Closest distance between markers (pixels)|
| imageBackground...   |         | String  | ImageBackground source                   |
| testID               |         | String  | Used in end-to-end tests
