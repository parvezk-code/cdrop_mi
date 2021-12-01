import {GridColDef} from '@mui/x-data-grid';

export type AgentWorkHistoryProps={
    dataSource:Array<TableAgentData>;
    title:() => string;
    bordered:boolean;
}

export type TableAgentData = {
    agentId: string,
    agentName: string,
    totalCalls: number,
    connectedCalls: number,
    avgCallDuration: number,
    totalActiveTime: number,
    totalIdleTime: number,
}

export type RowDataType = {
    sNo:number;
    agentId: string,
    agentName: string,
    totalCalls: number,
    connectedCalls: number,
    avgCallDuration: number,
    totalActiveTime: number,
    totalIdleTime: number,
}

export const randomAgentData = (): TableAgentData => {
    const val = Math.floor(Math.random() * 10000);
    return {
        agentId: `ID ${val}`,
        agentName: `P${val}`,
        totalCalls: val,
        connectedCalls: val,
        avgCallDuration: val,
        totalActiveTime: val,
        totalIdleTime: val
    };
}


export const columns: GridColDef[] = [
    {
        headerName: "S.No",
        field: "sNo",
        width: 150
    },
    {
        headerName: "Agent Id",
        field: "agentId",
        width: 150,
        //renderCell: renderCellExpand
    },
    {
        headerName: "Agent Name",
        field: "agentName",
        width: 150
    },
    {
        headerName: "Total Calls",
        field: "totalCalls",
        width: 150
    },
    {
        headerName: "Connected Calls",
        field: "connectedCalls",
        width: 150
    },
    {
        headerName: "Average Call Duration",
        field: "avgCallDuration",
        width: 150
    },
    {
        headerName: "Total Active Time",
        field: "totalActiveTime",
        width: 150
    },
    {
        headerName: "Total Idle Time",
        field: "totalIdleTime",
        width: 150
    }
];