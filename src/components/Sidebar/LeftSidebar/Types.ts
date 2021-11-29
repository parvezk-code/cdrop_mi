export type TimeLineDataType = {
    id: string,
    message: string,
    user: string,
    activity: string,
    time: string
};

type getTimeLineFunDataType = () => TimeLineDataType[];

export type TimeLineContainerPropType =
    { fetchTimeLineDataFn: getTimeLineFunDataType };

export type listType = {label:string, icon:any};



