# material-timeline component

## Instalation

Run `npm install material-timeline`

## Dependencies

This package uses components created from __material-ui__ so you will need to run
`npm install @material-ui/core`
and `npm install @material-ui/icons` in order for the Timeline components to work properly

## Usage

### Timeline

To create a Timeline component you can follow this example

 `<Timeline </br>
        isLeft={isLeft}
        isOneWay={!isDesktop}
        wrapItem={wrapItem}>
          {timelineItems.length > 0 ? timelineItems : (<CircularProgress style={
							{
								alignSelf: 'center',
								background: this.props.theme.palette.background.default
							}
						} />)}
      </Timeline>`