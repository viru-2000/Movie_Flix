import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Popular from "./component/Popular";
import TopRated from "./component/TopRated";
import App from "./App";
import UpcomingMovie from "./component/UpcomingMovie";
import Search from "./component/Search";
import SingleMovieDetail from "./component/SingleMovieDetail";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Popular />,
      },
      {
        path: "/topRated",
        element: <TopRated />,
      },
      {
        path: "/upcomingmovie",
        element: <UpcomingMovie />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/moviedetail",
        element: <SingleMovieDetail />,
      },
    ],
  },
]);

export default router;
