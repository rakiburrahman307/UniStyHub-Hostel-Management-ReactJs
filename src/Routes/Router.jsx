import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRouts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard/Dashboard";

const Root = lazy(() => import("../Layout/Root/Root"));
const Home = lazy(() => import("../Layout/Home/Home"));
const Login = lazy(() => import("../Layout/Login/Login"));
const Signup = lazy(() => import("../Layout/SignUp/Signup"));
const Detail = lazy(() => import("../Layout/Home/Detail"));
const MealsAll = lazy(() => import("../Pages/Meals/MealsAll"));
const UpcomingMeals = lazy(() =>
  import("../Pages/UpcomingMeals/UpcomingMeals")
);
const UserHome = lazy(() => import("../Layout/Dashboard/UserHome/UserHome"));
const Payment = lazy(() => import("../Pages/Payment/Payment"));
const RequestMeals = lazy(() =>
  import("../Layout/Dashboard/UserHome/RequestMeals")
);
const MyComment = lazy(() => import("../Layout/Dashboard/UserHome/MyReviews"));
const AdminProfile = lazy(() =>
  import("../Layout/Dashboard/Admin/AdminProfile/AdminProfile")
);
const ManageUsers = lazy(() =>
  import("../Layout/Dashboard/Admin/ManageUsers/ManageUsers")
);
const ServeMeals = lazy(() =>
  import("../Layout/Dashboard/Admin/ServeMeals/ServeMeals")
);
const AllMeals = lazy(() =>
  import("../Layout/Dashboard/Admin/AllMeals/AllMeals")
);
const AddMeal = lazy(() => import("../Layout/Dashboard/Admin/AddMeal/AddMeal"));
const AllReviews = lazy(() =>
  import("../Layout/Dashboard/Admin/AllReviews/AllReviews")
);
const Upcoming = lazy(() =>
  import("../Layout/Dashboard/Admin/Upcomingmeals/Upcoming")
);
const UpdateMeal = lazy(() =>
  import("../Layout/Dashboard/Admin/UpdateMeal/UpdateMeal")
);
const PaymentSuccess = lazy(() =>
  import("../Pages/PaymentSuccess/PaymentSuccess")
);
const PaymentFail = lazy(() => import("../Pages/PaymentFail/PaymentFail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/payment/success/:id",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment/fail/:id",
        element: <PaymentFail />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
      {
        path: "/detail/:id",
        element: (
          <PrivateRoute>
            <Detail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-12-server-beta-roan.vercel.app/all_meals/${params.id}`),
      },
      {
        path: "/meals",
        element: <MealsAll />,
      },
      {
        path: "/upcoming",
        element: <UpcomingMeals />,
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-12-server-beta-roan.vercel.app/plans/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "/dashboard/request_meal",
        element: <RequestMeals />,
      },
      {
        path: "/dashboard/my_comment",
        element: <MyComment />,
      },
      // Admin Routes
      {
        path: "/dashboard/adminProfile",
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allReviews",
        element: (
          <AdminRoute>
            <AllReviews />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/serveMeals",
        element: (
          <AdminRoute>
            <ServeMeals />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allMeals",
        element: (
          <AdminRoute>
            <AllMeals />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addMeals",
        element: (
          <AdminRoute>
            <AddMeal />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/upcoming",
        element: (
          <AdminRoute>
            <Upcoming />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateMeal/:id",
        element: (
          <AdminRoute>
            <UpdateMeal />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-12-server-beta-roan.vercel.app/all_meals/${params.id}`),
      },
    ],
  },
]);

export default router;
