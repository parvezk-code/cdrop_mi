import { useState } from 'react';
import { Button, DatePicker, version, message } from 'antd';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';



const TimeLine = () => {
	return (
		<div className="site-card-wrapper">
			<Card>
				<Card.Grid
					style={{
						color: 'white',
						background: '#69c0ff',
						width: '210px',
						margin: '20px 5px 20px 5px',
						borderRadius: '10px',
					}}>
					<span><b>Agent: {"Shubham"}</b></span><br />
					<span><b>Age: {"72 Days"} </b></span></Card.Grid>
				<Card.Grid style={{
					color: 'white',
					background: '#6d95eb',
					margin: '20px 5px 20px 5px',
					width: '210px',
					borderRadius: '10px'
				}}>
					<span><b>Total Calls: {"122"}</b></span><br />
					<span><b>Connected Calls: {"72"} </b></span>
				</Card.Grid>
				<Card.Grid style={{
					color: 'white',
					background: '#ec658e',
					margin: '20px 5px 20px 5px',
					width: '210px',
					borderRadius: '10px'
				}}>
					<span><b>Total Calling Hour: {"2:30"}</b></span><br />
					<span><b>Connected Hour: {"1:30"} </b></span>
				</Card.Grid>
				<Card.Grid style={{
					color: 'white',
					background: '#66dcc5',
					margin: '20px 5px 20px 5px',
					width: '210px',
					borderRadius: '10px'
				}}>
					<span><b>Incoming: {"07"}</b></span><br />
					<span><b>Outgoing: {"154"} </b></span>
				</Card.Grid>
			</Card>

		</div >
	);
}
export default TimeLine;