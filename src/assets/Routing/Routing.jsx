import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ManageOrder from '../../Pages/OrderManage/ManageOrder'
import AirtleData from '../../Pages/Airtle/Data'
import AirtleBundles from '../../Pages/Airtle/Bundles'
import AirtleMinutes from '../../Pages/Airtle/Minutes'
import BLData from '../../Pages/banglalink/Data'
import BLMinutes from '../../Pages/banglalink/Minutes,'
import BLBundles from '../../Pages/banglalink/Bundles'
import GpData from '../../Pages/Grameen/GpData'
import GpBundles from '../../Pages/Grameen/GpBundles'
import GpMinutes from '../../Pages/Grameen/GpMinutes'
import RobiBundles from '../../Pages/Robi/RobiBundles'
import RobiData from '../../Pages/Robi/RobiData'
import RobiMInutes from '../../Pages/Robi/RobiMInutes'
import UserList from '../../Pages/UserManage/UserList'
import Dashboard from '../../Pages/Dashboard/Dashboard'

export default function Routing() {
  return (
    <Routes>

        {/* Dashboard Root page */}
        <Route path='/Dashboard' element={<Dashboard />}/>

        {/* Admin Role Manage */}
        <Route path='/Admin/Role-manage' element={<ManageOrder />}/>
        <Route path='/Admin/Admin-list' element={<ManageOrder />}/>

        {/* Airtle Offerss */}
        <Route path='/Admin/Airtle-Data' element={<AirtleData />} />
        <Route path='/Admin/Airtle-Bundles' element={<AirtleBundles />}/>
        <Route path='/Admin/Airtle-Minutes' element={<AirtleMinutes />}/>

        {/* Robi Offers */}
        <Route path='/Admin/Robi-Bundles' element={<RobiBundles />}/>
        <Route path='/Admin/Robi-Data' element={<RobiData />} />
        <Route path='/Admin/Robi-Minutes' element={<RobiMInutes />}/>

        {/* Banglalink Offers */}
        <Route path='/Admin/BanglaLink-Data' element={<BLData />}/>
        <Route path='/Admin/BanglaLink-Minutes' element={<BLMinutes />}/>
        <Route path='/Admin/BanglaLink-Bundles' element={<BLBundles />}/>

        {/* Grameen Phone Offers */}
        <Route path='/Admin/Gp-Data' element={<GpData />}/>
        <Route path='/Admin/Gp-Bundles' element={<GpBundles />}/>
        <Route path='/Admin/Gp-Minutes' element={<GpMinutes />}/>

        {/* Order manage Route */}
        <Route path='/Admin/Order-Manage' element={<ManageOrder />}/>

        {/* User Manage route */}
        <Route path='/Admin/User-Manage' element={<UserList />}/>

    </Routes>
  )
}
