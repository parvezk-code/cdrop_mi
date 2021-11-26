type Projects = {
    code:string;
    createdAt:number;
    date:string;
    name:string;
    state:number;
    workingDays:Array<1|2|3|4|5|6|7>;
    agentsList:Array<string>;
    form:{
            name:string; 
            formDescription:number;
            fields:{
                [key: string]: {
                isRequired:boolean;
                order:number;
                question:string;
                type:number;
                validValues:Array<{label:string, value:string}>;
                }
            }
    };
};

export default Projects;