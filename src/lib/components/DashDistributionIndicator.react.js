import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashDistributionIndicator extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.ctx = null;
        this.devicePixelRatio = null;
        this.validIntervals = null;
        this.intervalSizes = null;
      }
    
    createValidIntervals = (intervals, colors) => {
        const result = [];
      
        // Step 1: Create 5 intervals
        for (let i = 0; i < intervals.length - 1; i++) {
          const start = intervals[i];
          const end = intervals[i + 1];
          const color = colors[i];
      
          // Step 2: Map intervals and colors
          result.push([start, end, color]);
        }
      
        // Step 3: Filter valid intervals (start and end should not be equal)
        const validIntervals = result.filter(([start, end]) => start !== end);
      
        return validIntervals;
    };

    calculateIntervalsRatios = (intervals) => {
        if (!intervals || intervals.length === 0) {
          return [];
        }
      
        // Step 1: Calculate the difference between the start of the first interval and end of the last interval
        const totalDifference = intervals[intervals.length - 1][1] - intervals[0][0];
      
        // Step 2: Calculate the ratio for each interval
        const ratios = intervals.map(([start, end]) => (end - start) / totalDifference);
      
        return ratios;
    };

    getIntegersInInterval = (start, end) => {
        const integers = [];
        for (let i = Math.ceil(start); i <= Math.floor(end); i++) {
            integers.push(i);
        }
        return integers;
    }

    drawEquilateralTriangle = (context, x, height, color) => {
        const side = (2 * height) / Math.sqrt(3);
        context.beginPath();
        context.moveTo(x, height);
        context.lineTo(x + side, -2*height);
        context.lineTo(x - side, -2*height);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    };
    
    drawCircle = (context, x, y, height, color) => {
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, height / 2, 0, 2 * Math.PI);
        context.fill();
    };

    drawCanvas = (context) => {
    
        const { width, height, expectedValue, actualValue, colorExpected, colorActual } = this.props;
        const blockHeight = height * (1 / 3)
        
        let currentX = 0;
        
        const { intervalSizes, validIntervals } = this;

        if (!intervalSizes || !validIntervals) {
            return;
        }
        // Values to check and remove
        let valuesToRemove = [0, validIntervals[validIntervals.length - 1][1]];

    
        for (let i = 0; i < intervalSizes.length; i++) {
            const blockWidth = width * intervalSizes[i];
            const [start, end, color] = validIntervals[i];
            const y = height * (1 / 3);
            
            context.fillStyle = color;
            context.fillRect(currentX, y, blockWidth, blockHeight);
            let intervalInt = this.getIntegersInInterval(start, end)


            // Iterate through each value to remove
            valuesToRemove.forEach(value => {
                // Check if the value is in the array
                let index = intervalInt.indexOf(value);

                // If the value is found, remove it
                if (index !== -1) {
                    intervalInt.splice(index, 1);
                }
            });

            // Draw integers below the bars
            for (let j = 0; j < intervalInt.length; j++) {
                const intValue = intervalInt[j];
                const textX = currentX + (intValue - start) / (end - start) * blockWidth;
                const textY = height * (2 / 3) + 15; // Adjust as needed

                context.fillStyle = 'black'; // Change color as needed
                context.font = '14px Arial'; // Change font as needed
                context.textAlign = 'center';

                context.fillText(intValue.toFixed(0), textX, textY);
            }
    
            currentX += blockWidth;
        }
        // Draw expected value as a triangle
        const expectedPosition = expectedValue / (validIntervals[0][0] + validIntervals[validIntervals.length - 1][1]) *  width;
    
        this.drawEquilateralTriangle(context, expectedPosition, blockHeight, colorExpected);

        const centerX = actualValue / (validIntervals[0][0] + validIntervals[validIntervals.length - 1][1]) *  width;;
        const centerY = blockHeight *1.5  // Adjust as needed
        this.drawCircle(context, centerX, centerY, height * (1/3), colorActual);
    };

    
      componentDidMount() {
        const { id, expectedValue, actualValue, interval, colorExpected, colorActual, colorInterval, setProps, style } = this.props;
        let validIntervals = this.createValidIntervals(interval, colorInterval);
        let intervalSizes = this.calculateIntervalsRatios(validIntervals);
        this.validIntervals = validIntervals;
        this.intervalSizes = intervalSizes;
        this.devicePixelRatio = window.devicePixelRatio;
        this.ctx = this.canvas.current.getContext('2d');
        this.drawCanvas(this.ctx);
        
        //this.drawCanvas(this.ctx);
    };
    
    render() {
        const { id, height, width } = this.props;
        this.drawCanvas(this.ctx);

        return (
            <div id={id}>
                    <canvas
                ref={this.canvas}
                style={{ width }}
                width={width}
                height={height}
            />
          </div>
        );
    }
}

DashDistributionIndicator.defaultProps = {

    colorExpected: '#75b34e',
    colorActual: '#4472c4',
    colorInterval: ['#FF0000', '#FFC220', '#77B450', '#FFC220', '#FF0000'],
    style: {},
    width: 300,
    height: 120,
};

DashDistributionIndicator.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,


    /**
     * Expected value of the distribution
     */
    expectedValue: PropTypes.number,

    /**
     * The color of the expected value indicator. A string representation of hex value
     */
    colorExpected: PropTypes.string,

    /**
     * Actual value of the distribution
     */
    actualValue: PropTypes.number,

    /**
     * The color of the actual value indicator. A string representation of hex value
     */
    colorActual: PropTypes.string,


    /**
     * Intervals, an array of 6 values providing 5 intervals
     */
    interval: PropTypes.array,

    /**
     * Interval of five hex colors providing the color for the intervals
     */
    colorInterval: PropTypes.array,

    /**
     * Interval of five hex colors providing the color for the intervals
     */
    style: PropTypes.array,


    width: PropTypes.number,

    height: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
