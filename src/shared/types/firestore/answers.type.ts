export type Answers = {
    createdTime:number;
    // todo type of formId
    formId:null;
    leadId:string;
    modifiedTime:number;
    values:{
        [key: string]: Array<string>;
    }
}
export default Answers;