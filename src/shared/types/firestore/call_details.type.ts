type CallDetails = {
    actual_project_id:string;
    agent_id:string;
    call_duration:number;
    call_time:number;
    call_type:string;
    channel:string;
    created_time:number;
    lead_id:string;
    phone_number:string;
    project_id:Array<string>;
    recording_link:string;
}

export default CallDetails;