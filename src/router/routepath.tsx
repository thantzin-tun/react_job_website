import { Home,About,Contact,Dashboard} from "pages";

export const routerPath = [
  {
    path:"/contact",
    element: <Home />,
    protect:true,
    nested:[
      {
        path:"jobs-in-myanmar",
        element:<Dashboard />
      },
    ]
  },
  {
    path:"/job-detail",
    element: <About />,
    nested: null,
    protect: false
  },
  {
    path:"/",
    element:<Contact />,
    nested: null,
    protect:true,
  },
];
