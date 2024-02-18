import {createBrowserRouter} from "react-router-dom";
import {Homepage} from "./components/homepage/homepage.tsx";
import {Admin} from "./components/admin/admin.tsx";
import {ErrorPage} from "./components/error-page/error-page.tsx";
import App from "./App.tsx";

export enum ROUTE_PATH {
    default = '',
    admin = 'admin',
    home = 'home',
}
export const router = createBrowserRouter([
    {
        path: ROUTE_PATH.default,
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTE_PATH.admin,
                element: <Admin />,
            },
            {
                path: ROUTE_PATH.home,
                element: <Homepage />,
            }
        ]
    }
]);