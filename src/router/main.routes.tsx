import { createBrowserRouter } from "react-router-dom";
import AssetPage from "../pages/asset";
import LoginPage from "../pages/login";

const mainRoutes = createBrowserRouter([
    {
        path : 'assetPage',
        element : <AssetPage />
    },
    {
        path : '',
        element : <LoginPage/>
    }
])

export {mainRoutes}