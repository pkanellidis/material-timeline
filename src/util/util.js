import TimelineItem from "../lib/TimelineItem/TimelineItem";
import { Typography, Chip } from "@material-ui/core";

export const timelineItems =
  {
    "TimelineItems": {
      0: {
      "date": "03/2019",
      "description": "Graduated from the University of Macedonia",
      "imgUrl": "https://www.uom.gr/site/images/logo.png",
      "tags": [{
        "name": "Computer Science"
      }, {
        "name": "Graduation"
      }],
      "title": "Full Stack Software Engineer"
    },
    1 : {
      "date": "03/2019",
      "description": "Started working as a Software Engineer at Intrasoft International",
      "imgUrl": "https://www.jobfairathens.gr/system/companies/logos/392/Intrasoft_logo_CMYK-1.png?1551949505",
      "tags": [{
        "name": "Java"
      }, {
        "name": "JSF/Javascript"
      }, {
        "name": "Full-Stack"
      }],
      "title": "Full Stack Software Engineer"
    },
    2 : {
      "date": "10/2018",
      "description": "Started working as a Software Engineer at Epsilon Net",
      "imgUrl": "https://www.epsilonnet.gr/imgs/db/products/ID3091_frontPageLogo.png",
      "tags": [{
        "name": "Javascript/Typescript"
      }, {
        "name": "Redux"
      }, {
        "name": "C#/ASP.Net"
      }, {
        "name": "SQL"
      }],
      "title": "Full Stack Software Engineer"
    }}
  }

  export const createTimelineItem = (key, item, index, isDesktop) => {

    const timelineItemIcon = (
      <Typography variant={isDesktop ? 'h6' : 'p'}>
        {item.date}
      </Typography>
    )
  
    let timelineItemHeader = null;
    if (item.tags && isDesktop) {
      timelineItemHeader = Object.keys(item.tags).map(tagKey => {
        return item.tags[tagKey] ?
          (<Chip
            className={styles.Chip}
            key={tagKey}
            color='primary'
                label={(<Typography color='textPrimary' variant='body2'>{item.tags[tagKey].name}</Typography>)} />) :
          null;
      })
    }
  
    const cardMediaProps = {
      imgUrl: item.imgUrl,
      height: '100%',
    }
  
    const timelineItemContent = (
      <React.Fragment>
        <Typography variant={isDesktop ? 'body1' : 'body2'}>{item.description}</Typography>
      </React.Fragment>
    )
  
    const timelineItem = (
      <TimelineItem
        titleChildren={(<Typography gutterBottom variant={isDesktop ? 'h6' : 'p'}>{item.title}</Typography>)}
        yearBackgroundColor={this.props.theme.palette.primary.main}
        yearColor='white'
        cardContentChildren={timelineItemContent}
        cardHeaderChildren={timelineItemHeader}
        iconContent={timelineItemIcon}
        cardMediaProps={cardMediaProps}
        key={key}
        expandableCardContent
        padTop
        hasDivider />
    )
  
    return timelineItem
  
  }