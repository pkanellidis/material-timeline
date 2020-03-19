import React from 'react';
import TimelineItem from './TimelineItem';
import { directions } from '../enums/enums';
import { render } from '@testing-library/react';


describe('TimelineItem', () => {
  let props;

  beforeEach(() => {
    props = {
      titleChildren:(<div></div>),
      yearBackgroundColor:'#fafafa',
      yearColor: 'white',
      cardContentChildren: (<div></div>),
      cardHeaderChildren: (<div></div>),
      iconContent: (<div></div>),
      cardMediaProps: {src: ''},
      expandableCardContent: true,
      padTo: true,
      hasDivider: true,
    }
  });

  // Shallow / unit tests begin here
  it('Should render component with Full Element', () => {
    props = {
      ...props,
      direction: directions.LEFT,
      isOneWay: true,
    }

    const {container} = render(<TimelineItem {...props} />)
    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(true)

  })
  
  it('Should render component with Simple Element', () => {
    props = {
      ...props,
      direction: directions.LEFT,
      isOneWay: false,
    }

    const {container} = render(<TimelineItem {...props} />)
    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(false)

  })

  it('Should render component with Simple Element (default value)', () => {
    props = {
      ...props,
      direction: directions.LEFT,
    }

    const {container} = render(<TimelineItem {...props} />)
    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(false)

  })

  it('Should render component with Full Element with Left Arrow', () => {
    props = {
      ...props,
      direction: directions.LEFT,
      isOneWay: true,
    }

    const {container} = render(<TimelineItem {...props} />)
    expect(container.firstChild.children[1].classList.toString().includes('ArrowLeft')).toBe(true)
  })
  
  it('Should render component with Full Element with Right Arrow', () => {
    props = {
      ...props,
      direction: directions.RIGHT,
      isOneWay: true,
    }

    const {container} = render(<TimelineItem {...props} />)
    expect(container.firstChild.children[1].classList.toString().includes('ArrowRight')).toBe(true)

  })

  it('Should render component with Full Element with Right Arrow (default value)', () => {
    props = {
      ...props,
    }

    const {container} = render(<TimelineItem {...props} />)
    expect(container.firstChild.children[1].classList.toString().includes('ArrowRight')).toBe(true)
  })
  
  it('Should render component with Element with List Dot Left', () => {
    props = {
      ...props,
      direction: directions.LEFT,
      isOneWay: false,
    }

    const {container} = render(<TimelineItem {...props} />)
    expect(container.firstChild.children[0].classList.toString().includes('listDotLeft')).toBe(true)
    
  })
  
  it('Should render component with Element with List Dot Right', () => {
    props = {
      ...props,
      direction: directions.RIGHT,
      isOneWay: false,
    }

    const {container} = render(<TimelineItem {...props} />)    
    expect(container.firstChild.children[0].classList.toString().includes('listDotRight')).toBe(true)


  })
  
  it('Should render component with Element with List Dot Right (default value)', () => {
    props = {
      ...props,
    }

    const {container} = render(<TimelineItem {...props} />)    
    expect(container.firstChild.children[0].classList.toString().includes('listDotRight')).toBe(true)


  })

  //TODO: check if the tests above work with no input (default values)
  // Render / mount / integration tests begin here

});
