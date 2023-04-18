import { useEffect, useState } from "react"
import axios from "axios";


const AssetPage = () => {

    const [asset, setAsset] = useState()

    const getAsset = () => {
        axios.get(`https://demo.globalqss.com/api/v1/models/a_asset`,{
            headers : {
                'Authorization' : `Bearer${localStorage.getItem('token')}`
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

    

    return <h1>aset page</h1>
}

export default AssetPage