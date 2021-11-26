import { FC, } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Overview, Agent } from "../Overview";
import "./PageLayout.scss";


type PageLayoutProps = {
  leftSiderCollapsed: boolean,
  rightSiderCollapsed: boolean
}

const PageLayout: FC<PageLayoutProps> = props => {
  const home = <Overview />;

  return (
    
          <Router>
            <Routes>
              <Route path="/" element={home} />
              <Route path="/home" element={home} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/project" element={<Overview />} />
              <Route path="/agent" element={<Agent />} />
            </Routes>
          </Router>
    );
}
export default PageLayout;