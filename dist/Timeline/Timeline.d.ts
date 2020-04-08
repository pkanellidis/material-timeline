
interface TimelineProps {
    isOneWay?: boolean,
	wrapItem: (item, index) => { },
	isLeft: (item, index) => { },
	stackedImages?: boolean
}

export default function Timeline(props: TimelineProps): JSX.Element;