import { useEffect, useState } from "react"
import axios from "axios";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface RecordsItem{
    id: number
    name : string
    InventoryNo : string
    A_AssetType: string
    ManufacturedYear : number
    A_Asset_CreateDate : string
}


const AssetPage = () => {

    const [assets, setAsset] = useState<RecordsItem[]>([])

    const getAsset = () => {
       
        axios.get(`/api/v1/models/a_asset`,{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('auth')}`
            }
        })
        .then((res) => {
            const result = res.data.records
            setAsset(result)
            console.log(result);   
        })
    }

    useEffect(() => {
        getAsset()
    })

    

    return (
        <>
            {assets.length > 0 && (
            // <ul>
            //     {assets.map(a => (
            //         <li key={a.id}>
            //             <p> aset name : {a.Name}</p>
            //             <p> aset type : {a.A_AssetType}</p></li>
            //     ))}
            // </ul>
            <DataTable value={assets} tableStyle={{ minWidth: '50rem' }}>
                <Column field="InventoryNo" header="InventoryNo"></Column>
                <Column field="Name" header="Name"></Column>
                <Column field="A_AssetType" header="Type"></Column>
                <Column field="ManufacturedYear" header="Manufactured Year"></Column>
                <Column field="A_Asset_CreateDate" header="CreateDate"></Column>
            </DataTable>
            )}
        </>
    )
}

export default AssetPage