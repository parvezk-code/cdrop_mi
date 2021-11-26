import CallDetails from './call_details.type';

type TransactionDetails = {
    "Last transaction date":string;
    Txn_count:string;
    "Calling date":string;
    "Trx date":string;
    agent_id:string;
    created_time:number;
    status:string;
    last_call_details:CallDetails;
};

type Leads = {
    name:string;
    phone:string;
    project_id:Array<string>;
    [key: string]: TransactionDetails|string|Array<string>;   
};

export default Leads;