# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashDistributionIndicator <- function(id=NULL, actualValue=NULL, colorActual=NULL, colorExpected=NULL, colorInterval=NULL, expectedValue=NULL, height=NULL, interval=NULL, style=NULL, width=NULL) {
    
    props <- list(id=id, actualValue=actualValue, colorActual=colorActual, colorExpected=colorExpected, colorInterval=colorInterval, expectedValue=expectedValue, height=height, interval=interval, style=style, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDistributionIndicator',
        namespace = 'dash_distribution_indicator',
        propNames = c('id', 'actualValue', 'colorActual', 'colorExpected', 'colorInterval', 'expectedValue', 'height', 'interval', 'style', 'width'),
        package = 'dashDistributionIndicator'
        )

    structure(component, class = c('dash_component', 'list'))
}
