import { FC, } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Overview, Agent } from "../Overview";
import ListContainer from "../../components/Sidebar/LeftSidebar/ListContainer";
import TimelineContainer from "../../components/Sidebar/RightSidebar/TimelineContainer";
import { Box } from "@mui/system";
import { fetchTimeLineData } from "../../repository/projectrepository";
import "./PageLayout.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import AppRouter from "../../AppRouter";

const PageLayout: FC = () => {

  const contentItems = [
    {path:"/", element:<Overview />},
    {path:"/home", element:<Overview />},
    {path:"/overview", element:<Overview />},
    {path:"/project", element:<Overview />},
    {path:"/agent", element:<Agent />},
  ];

  return (
    <>
      <Navbar />
      <Box className="page-content">
        <Sidebar direction={'left'} minWidth={'60px'} maxWidth={'184px'}>
          <ListContainer />
        </Sidebar>

        <Box className="content">
          <AppRouter list={contentItems} />
        </Box>

        <Sidebar direction={'right'} minWidth={'55px'} maxWidth={'210px'}>
          <TimelineContainer fetchTimeLineDataFn={fetchTimeLineData} />
        </Sidebar>

      </Box>
    </>
  );
}
export default PageLayout;