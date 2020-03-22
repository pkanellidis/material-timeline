import React from 'react'
import TimelineItem from "../lib/TimelineItem/TimelineItem";
import { Typography, Chip } from "@material-ui/core";

export const timelineItems =
{
    "TimelineItems": {
        0: {
            "date": "03/2019",
            "description": "Graduated from the University of Macedonia",
            "imgUrl": "https://www.uom.gr/site/images/logo.png",
            "tags": {
                0: {
                    "name": "Computer Science"
                }, 1: {
                    "name": "Graduation"
                }
            },
            "title": "Full Stack Software Engineer"
        },
        1: {
            "date": "03/2019",
            "description": "Started working as a Software Engineer at Intrasoft International",
            "imgUrl": "https://www.jobfairathens.gr/system/companies/logos/392/Intrasoft_logo_CMYK-1.png?1551949505",
            "tags": {
                0: {
                    "name": "Java"
                }, 1: {
                    "name": "JSF/Javascript"
                }, 2: {
                    "name": "Full-Stack"
                }
            },
            "title": "Full Stack Software Engineer"
        },
        2: {
            "date": "10/2018",
            "description": "Started working as a Software Engineer at Epsilon Net",
            "imgUrl": "https://www.epsilonnet.gr/imgs/db/products/ID3091_frontPageLogo.png",
            "tags": {
                0: {
                    "name": "Javascript/Typescript"
                }, 1: {
                    "name": "Redux"
                }, 2: {
                    "name": "C#/ASP.Net"
                }, 3: {
                    "name": "SQL"
                }
            },
            "title": "Full Stack Software Engineer"
        }
    }
}

export const createTimelineItem = (key, item, index, isDesktop) => {

    const timelineItemIcon = (
        <Typography variant={isDesktop ? 'h6' : 'body2'}>
            {item.date}
        </Typography>
    )

    let timelineItemHeader = null;
    if (item.tags && isDesktop) {
        timelineItemHeader = Object.keys(item.tags).map(tagKey => {
            return item.tags[tagKey] ?
                (<Chip
                    style={{
                        margin: '2px',
                        backgroundColor: '#00acc1'
                    }}
                    key={tagKey}
                    label={(<Typography style={{ color: 'white' }} variant='body2'>{item.tags[tagKey].name}</Typography>)} />) :
                null;
        })
    }

    const cardMediaProps = {
        imgUrl: item.imgUrl,
        height: '100px',
    }

    const timelineItemContent = (
        <React.Fragment>
            <Typography variant={isDesktop ? 'body1' : 'body2'}>{item.description}</Typography>
        </React.Fragment>
    )

    const timelineItem = (
        <TimelineItem
            isStackedImage={true}
            titleChildren={(
                <Typography gutterBottom style={{
                    textAlign: 'center'
                }} variant={isDesktop ? 'h6' : 'body2'}>{item.title}</Typography>
            )}

            yearBackgroundColor='#00acc1'
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

    console.log(timelineItem)

    return timelineItem

}