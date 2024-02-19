# AUTO GENERATED FILE - DO NOT EDIT

export dashdistributionindicator

"""
    dashdistributionindicator(;kwargs...)

A DashDistributionIndicator component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `actualValue` (Real; optional): Actual value of the distribution
- `colorActual` (String; optional): The color of the actual value indicator. A string representation of hex value
- `colorExpected` (String; optional): The color of the expected value indicator. A string representation of hex value
- `colorInterval` (Array; optional): Interval of five hex colors providing the color for the intervals
- `expectedValue` (Real; optional): Expected value of the distribution
- `height` (Real; optional)
- `interval` (Array; optional): Intervals, an array of 6 values providing 5 intervals
- `style` (Array; optional): Interval of five hex colors providing the color for the intervals
- `width` (Real; optional)
"""
function dashdistributionindicator(; kwargs...)
        available_props = Symbol[:id, :actualValue, :colorActual, :colorExpected, :colorInterval, :expectedValue, :height, :interval, :style, :width]
        wild_props = Symbol[]
        return Component("dashdistributionindicator", "DashDistributionIndicator", "dash_distribution_indicator", available_props, wild_props; kwargs...)
end

