type callDetails = {
    attempted_call:number;
    connected_call:number;
    total_time_secs:number;
}; 

type Agents = {
    email_id:string;
    global_stats:callDetails;
    id:string;
    name_detail:{
        first:string; 
        last:string
    };
    phone:string;
    project_id:Array<string>;
    stats:{ 
        [key: string]: callDetails
    };    
};

export default Agents;