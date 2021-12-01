import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

type routerListType = Array<{
    path: string;
    element: JSX.Element;
}>

type propType = { list: routerListType };

const AppRouter: FC<propType> = (props) => {

    return (
        <Router>
            <Routes>
                {props.list.map((data) => {
                    return (<Route path={data.path} element={data.element} />)
                })}
            </Routes>
        </Router>
    );
};

export default AppRouter;
