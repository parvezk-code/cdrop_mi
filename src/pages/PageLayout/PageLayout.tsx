import { FC, } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Overview, Agent } from "../Overview";
import ListContainer from "../../components/Sidebar/LeftSidebar/ListContainer";
import TimelineContainer from "../../components/Sidebar/RightSidebar/TimelineContainer";
import { Box } from "@mui/system";
import { fetchTimeLineData } from "../../repository/projectrepository";
import "./PageLayout.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

type PageLayoutProps = {
  leftSiderCollapsed: boolean,
  rightSiderCollapsed: boolean
}

const PageLayout: FC<PageLayoutProps> = props => {
  const home = <Overview />;

  return (
    <>
      <Navbar />
      <Box className="page-content">
        <Sidebar direction={'left'} minWidth={'60px'} maxWidth={'184px'}>
          <ListContainer />
        </Sidebar>

        <Box className="content">
          <Router>
            <Routes>
              <Route path="/" element={home} />
              <Route path="/home" element={home} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/project" element={<Overview />} />
              <Route path="/agent" element={<Agent />} />
            </Routes>
          </Router>
        </Box>

        <Sidebar direction={'right'} minWidth={'55px'} maxWidth={'210px'}>
          <TimelineContainer fetchTimeLineDataFn={fetchTimeLineData} />
        </Sidebar>
        
      </Box>
    </>
  );
}
export default PageLayout;