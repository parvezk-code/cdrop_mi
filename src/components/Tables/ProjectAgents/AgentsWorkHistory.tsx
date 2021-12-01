import * as React from 'react';
import { FC } from 'react';
import {columns, AgentWorkHistoryProps, RowDataType} from './Types';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./AgentsWorkHistory.scss";


function Row(props: { row: RowDataType }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false); 

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={() => setOpen(!open)}>
        <TableCell component="th" scope="row">
          {row.sNo}
        </TableCell>
        <TableCell align="left">{row.agentId}</TableCell>
        <TableCell align="left">{row.agentName}</TableCell>
        <TableCell align="left">{row.totalCalls}</TableCell>
        <TableCell align="left">{row.connectedCalls}</TableCell>
        <TableCell align="left">{row.avgCallDuration}</TableCell>
        <TableCell align="left">{row.totalActiveTime}</TableCell>
        <TableCell align="left">{row.totalIdleTime}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            Agent Time line data
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const AgentsWorkHistory:FC<AgentWorkHistoryProps> = (props) => {

  const rows = props.dataSource?.map((value, index) => ({ ...value, sNo: index+1 }));

  return (
    <TableContainer className="agents-work-history" component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="left">{columns[0].headerName}</TableCell>
            <TableCell align="left">{columns[1].headerName}</TableCell>
            <TableCell align="left">{columns[2].headerName}</TableCell>
            <TableCell align="left">{columns[3].headerName}</TableCell>
            <TableCell align="left">{columns[4].headerName}</TableCell>
            <TableCell align="left">{columns[5].headerName}</TableCell>
            <TableCell align="left">{columns[6].headerName}</TableCell>
            <TableCell align="left">{columns[7].headerName}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.agentId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AgentsWorkHistory;
