import { createBrowserRouter } from "react-router-dom";
import AssetPage from "../pages/a_asset/AssetList";
import LoginPage from "../pages/login";
import { CreateAssetPage } from "../pages/a_asset/CreateAsset";

const mainRoutes = createBrowserRouter([
    {
        path : 'assetPage',
        element : <AssetPage />,
    },
    {
        path : 'CreateAssetPage',
        element :<CreateAssetPage/>
    },
    {
        path : '',
        element : <LoginPage/>
    }
])

export {mainRoutes}