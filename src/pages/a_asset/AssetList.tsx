import { useEffect, useState } from "react"
import axios from "axios";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';       
import { TabView, TabPanel } from 'primereact/tabview';
import { Navigate, useNavigate } from "react-router-dom";
        

interface RecordsItem{
    id: number
    name : string
    InventoryNo : string
    A_AssetType: string
    ManufacturedYear : number
    A_Asset_CreateDate : string
}

interface tabs{
    id: number
    Name : string
    Help : string
}


const AssetPage = () => {

    const [assets, setAsset] = useState<RecordsItem[]>([])
    const [tabs, setTabs] = useState<tabs[]>([])

    const getAsset = () => {

        const axios1 =  axios.get(`/api/v1/windows/asset/tabs`,{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('auth')}`
            }
        })
        
        const axios2 =  axios.get(`/api/v1/models/a_asset`,{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('auth')}`
            }
        })
       
       axios.all([axios1, axios2])
       .then((res) => {
        setAsset(res[1].data.records)
        setTabs(res[0].data.tabs)

        console.log(res[0].data.tabs);   
        })
        
    }

    useEffect(() => {
        getAsset()
    },[])


    const navigate = useNavigate()

    function handleAdd() {
        navigate('/CreateAssetPage')
    }

  
    return (
        <>
            <TabView scrollable>
                {tabs.map((tab) => {
                    return (
                        <TabPanel key={tab.id} header={tab.Name}>
                            {tab.Help}
                        </TabPanel>
                    );
                })}
            </TabView>

            <Button onClick={() => {handleAdd()}}>Add Asset</Button>

            {assets.length > 0 && (
            <DataTable value={assets} tableStyle={{ minWidth: '50rem' }}>
                <Column field="InventoryNo" header="InventoryNo"></Column>
                <Column field="Name" header="Name"></Column>
                <Column field="A_AssetType" header="Type"></Column>
                <Column field="ManufacturedYear" header="Manufactured Year"></Column>
                <Column field="A_Asset_CreateDate" header="CreateDate"></Column>
                <Column field="A_Asset_CreateDate" header="CreateDate"></Column>
            </DataTable>
            )}

        </>
    )
}

export default AssetPage