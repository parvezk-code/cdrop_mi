import { FC } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;



export const Overview: FC = () => {
    return <div className="overview">
        Overview
    </div>;
};

export const Project: FC = () => {
    return <div className="overview">Project</div>;
};

export const Agent: FC = () => {
    return <div className="overview">Agent</div>;
};
