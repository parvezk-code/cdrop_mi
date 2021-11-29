import { FC } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimeLineStep from './TimeLineStep';
import { TimeLineContainerPropType } from './Types';
import "./TimelineContainer.scss";


const TimelineContainer: FC<TimeLineContainerPropType> = (props) => {

  const timeLinedata = props.fetchTimeLineDataFn();

  return (
    
      <Timeline className="timeline">

        {timeLinedata?.map((data) => {
          return (
            <TimeLineStep message={data.message}
              user={data.user}
              activity={data.activity}
              time={data.time}
              key={data.id}
              id={data.id} />
          );
        })}

      </Timeline>
  );
}

export default TimelineContainer;