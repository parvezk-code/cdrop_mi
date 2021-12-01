import { FC } from 'react';
import NewProjectForm from '../components/NewProjectForm/NewProjectForm';
import AgentsWorkHistory from '../components/Tables/ProjectAgents/AgentsWorkHistory';
import { fetchTableAgentData } from '../repository/projectrepository';


export const Overview: FC = () => {
    return <div className="overview">
        <NewProjectForm />
        <AgentsWorkHistory dataSource={fetchTableAgentData()} title={() => "Top Active Caller"}
            bordered={true} />
    </div>;
};

export const Project: FC = () => {
    return <div className="overview">Project</div>;
};

export const Agent: FC = () => {
    return <div className="overview">Agent</div>;
};
