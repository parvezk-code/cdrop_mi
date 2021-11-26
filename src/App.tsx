import { FC } from "react";
import "./App.scss";
import { PageLayout } from "./pages/PageLayout";

const App: FC = () => {
  
  return (
    <div className="App">
      <PageLayout leftSiderCollapsed={false} rightSiderCollapsed={false} />
    </div>
  );
};

export default App;
