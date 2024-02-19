# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashDistributionIndicator(Component):
    """A DashDistributionIndicator component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- actualValue (number; optional):
    Actual value of the distribution.

- colorActual (string; default '#4472c4'):
    The color of the actual value indicator. A string representation
    of hex value.

- colorExpected (string; default '#75b34e'):
    The color of the expected value indicator. A string representation
    of hex value.

- colorInterval (list; default ['#FF0000', '#FFC220', '#77B450', '#FFC220', '#FF0000']):
    Interval of five hex colors providing the color for the intervals.

- expectedValue (number; optional):
    Expected value of the distribution.

- height (number; default 120)

- interval (list; optional):
    Intervals, an array of 6 values providing 5 intervals.

- style (list; optional):
    Interval of five hex colors providing the color for the intervals.

- width (number; default 300)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_distribution_indicator'
    _type = 'DashDistributionIndicator'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, expectedValue=Component.UNDEFINED, colorExpected=Component.UNDEFINED, actualValue=Component.UNDEFINED, colorActual=Component.UNDEFINED, interval=Component.UNDEFINED, colorInterval=Component.UNDEFINED, style=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'actualValue', 'colorActual', 'colorExpected', 'colorInterval', 'expectedValue', 'height', 'interval', 'style', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'actualValue', 'colorActual', 'colorExpected', 'colorInterval', 'expectedValue', 'height', 'interval', 'style', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashDistributionIndicator, self).__init__(**args)
