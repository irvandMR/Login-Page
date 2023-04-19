import { useEffect, useState } from "react"
import axios from "axios";


const AssetPage = () => {

    const [asset, setAsset] = useState()

    const getAsset = () => {
        // console.log(localStorage.getItem('token'))
        axios.get(`/api/v1/models/a_asset`,{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('auth')}`
            }
        })
        .then((res) => {
            setAsset(res.data.records)
            console.log(res.data.records);   
        })
    }

    useEffect(() => {
        getAsset()
    })

    

    return (
        <>

        </>
    )
}

export default AssetPage