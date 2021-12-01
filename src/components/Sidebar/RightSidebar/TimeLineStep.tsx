import { FC } from 'react';
import { TimeLineDataType } from './Types';
import './TimeLineStep.scss';
import { mergeStrings } from '../../../utils/stringutils';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import LightIcon from '@mui/icons-material/Light';


const getColorAndIcon = (message: string) => {

    if (message === 'Permission Disabled') {
        return ({ color: 'red', icon: <ConnectedTvIcon sx={{ fontSize: 15 }} /> });
    } else if (message === 'No Activity') {
        return ({ color: 'orange', icon: <LightIcon sx={{ fontSize: 15 }} /> });
    } else if (message === 'Hurry') {
        return ({ color: 'green', icon: <HourglassEmptyIcon sx={{ fontSize: 15 }} /> });
    } else {
        return ({ color: 'blue', icon: <FastfoodIcon sx={{ fontSize: 15 }} /> });
    }
}

const TimeLineStep: FC<TimeLineDataType> = (props) => {

    const { color: colorClass, icon } = getColorAndIcon(props.message);

    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot>
                    {icon}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent >
                <p className={mergeStrings(["message", colorClass])}>{props.message}</p>
                <p className="details" >{props.user}</p>
                <p className="details" >{props.activity}</p>
                <p className="details time" >{props.time}</p>
            </TimelineContent>
        </TimelineItem>
    );
}

export default TimeLineStep;