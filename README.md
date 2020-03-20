
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

```html
    <Timeline
            isLeft={isLeft}
            isOneWay={!isDesktop}
            wrapItem={wrapItem}>
            {timelineItems.length > 0 ? timelineItems : (<CircularProgress style={
              {
                alignSelf: 'center',
                background: this.props.theme.palette.background.default
              }
            } />)}
          </Timeline>
```

__Props:__
- __isLeft:__ __function(item, index)__.
> It should return if each element should be on the left side or not. __NOTE__ it is 
ignored if the Timeline is one way 
- __isOneWay: Boolean__
>