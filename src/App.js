import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Dashboard from "./component/dashboard/Dashboard";
import Invoice from "./component/dashboard/Invoice";
import NewInvoice from "./component/dashboard/NewInvoice";
import invoiceDetail from "./component/dashboard/invoiceDetail";

function App() {
  const myRouter = createBrowserRouter([
    { path: "", Component: Login },
    { path: "/login", Component: Login },
    { path: "register", Component: Register },
    {
      path: "/dashboard",
      Component: Dashboard,
      children: [
        {
          path: "",
          Component: Invoice,
        },
        {
          path: "invoice",
          Component: Invoice,
        },
        {
          path: "new-invoice",
          Component: NewInvoice,
        },
        {
          path: "invoice-details",
          Component: invoiceDetail,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={myRouter}></RouterProvider>
    </div>
  );
}

export default App;
