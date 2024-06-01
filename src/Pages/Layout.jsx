import React from 'react'
import { Link } from 'react-router-dom'

export default function Left_site_Layout() {
  return (
    <div className="left-site-layout rounded-md py-5 px-3">
    <div className="left-sidebar">
        <span>

        </span>
        <div className="list-items flex flex-col items-center">
            <ul>
                <li> <Link to={"/Dashboard"} >Dashboard</Link> </li>
                <li> <Link to={"/Admin/"} >Admin</Link> </li>
                <li> <Link to={"/Admin/Order-Manage"}>Manage Orders</Link> </li>
                <li> <Link to={"/Admin/User-Manage"}>Manage Users</Link> </li>
                <li> <span>Airtle Offers</span>
                    <ul>
                        <li><Link to={"/Admin/Airtle-Data"}>Data Package</Link></li>
                        <li><Link to={"/Admin/Airtle-Bundles"}>Bundles Package</Link></li>
                        <li><Link to={"/Admin/Airtle-Minutes"}>Mintues Package</Link></li>
                    </ul>
                 </li>
                 <li><span>Robi Offers</span>
                    <ul>
                        <li><Link to={"/Admin/Robi-Data"}>Data Package</Link></li>
                        <li><Link to={"/Admin/Robi-Bundles"}>Bundles Package</Link></li>
                        <li><Link to={"/Admin/Robi-Minutes"}>Mintues Package</Link></li>
                    </ul>
                 </li> 
                 <li> <span>Banglalink Offers</span>
                    <ul>
                        <li><Link to={"/Admin/BanglaLink-Data"}>Data Package</Link></li>
                        <li><Link to={"/Admin/BanglaLink-Bundles"}>Bundles Package</Link></li>
                        <li><Link to={"/Admin/BanglaLink-Minutes"}>Mintues Package</Link></li>
                    </ul>
                 </li>
                 <li> <span>Banglalink Offers</span>
                    <ul>
                        <li><Link to={"/Admin/Gp-Data"}>Data Package</Link></li>
                        <li><Link to={"/Admin/Gp-Bundles"}>Bundles Package</Link></li>
                        <li><Link to={"/Admin/Gp-Minutes"}>Mintues Package</Link></li>
                    </ul>
                 </li>
            </ul>
        </div>
    </div>
</div>
  )
}
