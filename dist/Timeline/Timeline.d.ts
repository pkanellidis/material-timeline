import { HTMLAttributes } from "react";

interface TimelineProps extends HTMLAttributes<T>{
    isOneWay?: boolean,
	wrapItem: (item, index) => { },
	isLeft: (item, index) => { },
	stackedImages?: boolean
}

export default function Timeline(props: TimelineProps): JSX.Element;