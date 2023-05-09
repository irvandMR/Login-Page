import { useFormik } from "formik"

export const CreateAssetPage = () => {

  const formAddAsset = useFormik({
    initialValues : {
      {
         isSOTrx: true,
        AD_Org_ID: {
            id: 11
        },
        A_Asset_Group_ID: {
            id: 50006
        },
        A_Asset_Status: {
            id: "AC"
        },
        AssetActivationDate: "2023-03-24",
        AssetServiceDate: "2023-03-24",
        Help: "CreatedFrom InvoiceLine",
        InventoryNo: "1000000",
        IsActive: true,
        IsDepreciated: false,
        IsDisposed: false,
        "IsFullyDepreciated: false,
        IsInPosession: false,
        IsOwned: true,
        M_Locator_ID: {
            id: 101
        },
        M_Product_ID: {
            id: 200001
        },
        Name: "Asset Vehicle-Light, Inc-10000010",
        Value: "Asset Vehicle-Light, Inc-10000010"
    }
    }
  })

  return (
    <>

    </>
  )
}