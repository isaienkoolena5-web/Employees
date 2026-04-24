import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import { routesData } from "./routes/data";
import { v4 } from "uuid";
import type { RouteObj } from "./routes/types";
import EmployeeLayout from "./components/EmployeeLayout/EmployeeLayout";

function App() {
  const routes = routesData.map((route: RouteObj) => {
    return <Route key={v4()} path={route.path} element={route.element} />;
  });

  return (
    <BrowserRouter>
      <GlobalStyles />
      <EmployeeLayout>
        <Routes>
          {routes}
        </Routes>
      </EmployeeLayout>
    </BrowserRouter>
  );
}

export default App;
