import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import AirplayIcon from '@mui/icons-material/Airplay';
import PersonIcon from '@mui/icons-material/Person';

import ColumnData from "../shared/types/projectcolumndata.type";
import { TimeLineDataType} from "../components/Sidebar/RightSidebar/Types";
import { listType} from "../components/Sidebar/LeftSidebar/Types";



export const columnData = (): Array<ColumnData> => {
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return data;
    //     const column = [
    //         {
    //             title: 'Name',
    //             dataIndex: 'name',
    //             key: 'name',
    //             render: (text: string) => <a>{ text } < /a>,
    //         },
    //         {
    //             title: 'Age',
    //             dataIndex: 'age',
    //             key: 'age',
    //         },
    //         {
    //             title: 'Address',
    //             dataIndex: 'address',
    //             key: 'address',
    //         },
    //         {
    //             title: 'Tags',
    //             key: 'tags',
    //             dataIndex: 'tags',
    //             render: (tags: string[]) => (
    //                 <>
    //                 {
    //                     tags.map((tag: string) => {
    //                         let color = tag.length > 5 ? 'geekblue' : 'green';
    //                         if (tag === 'loser') {
    //                             color = 'volcano';
    //                         }
    //                         return (
    //                             <Tag color= { color } key = { tag } >
    //                                 { tag.toUpperCase() }
    //                                 < /Tag>
    //             );
    //                 })
    //         }
    //         < />
    //       ),
    //     },
    // {
    //     title: 'Action',
    //         key: 'action',
    //             render: (text: any, record: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
    //                 <Space size= "middle" >
    //                 <a>Invite { record.name } </a>
    //                     < a > Delete < /a>
    //                     < /Space>
    //       ),
    // },
    //   ];


    // }
}

export const leftSidebarData:Array<listType> = [
    {label:"Overview", icon:<SummarizeOutlinedIcon/>},
    {label:"Project", icon:<AirplayIcon/>},
    {label:"Agent", icon:<PersonIcon/>},
];


export const fetchTimeLineData = (): Array<TimeLineDataType> => {
    const data = [
        {
            id: '1',
            message: 'Permission Disabled',
            user: 'Aman - motorolla',
            activity: 'Inactive from 30 min',
            time: '9 sep 03:45',
        },
        {
            id: '2',
            message: 'No Activity',
            user: 'Vasim - samsung',
            activity: 'Inactive from 30 min',
            time: '9 sep 03:45'
        },
        {
            id: '3',
            message: 'Hurry',
            user: 'Shiva - MI',
            activity: 'Inactive from 30 min',
            time: '9 sep 03:45'
        },
        {
            id: '4',
            message: 'No Activity',
            user: 'Aman - motorolla',
            activity: 'Inactive from 30 min',
            time: '9 sep 03:45'
        }
    ];
    return data;
}