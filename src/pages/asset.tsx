import { useEffect, useState } from "react"
import axios from "axios";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const AssetPage = () => {

    const [assets, setAsset] = useState('')

    const getAsset = () => {
        // console.log(localStorage.getItem('token'))
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
            <ul>
                {assets.map(a => (
                    <li key={a.id}>{a.Name}</li>
                ))}
            </ul>
            )}
        </>
    )
}

export default AssetPage