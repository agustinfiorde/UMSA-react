import Page1 from "../../pages/Page1";
import Page2 from "../../pages/Page2";
import Page3 from "../../pages/Page3";

interface RouteInfo {
  id: string;
  path: string;
  label: string;
  component: React.ComponentType;
}

const routes: RouteInfo[] = [
  {
    id: "page1",
    path: "/",
    label: "Page1",
    component: Page1,
  },
  {
    id: "page2",
    path: "/page2",
    label: "-Page2-",
    component: Page2,
  },
  {
    id: "page3",
    path: "/page3",
    label: "+Page3+",
    component: Page3,
  },
];

export default routes;
