import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import { useReducer } from 'react';
import { AdminReducer, InitialState } from '../assets/Reducer/AdminReducer';






export default function Left_site_Layout() {

    const [state, dispatch] = useReducer(AdminReducer, InitialState);

    console.log(state)



  return (
    <div className="left-site-layout w-[85%] mx-auto sticky top-0 rounded-md py-5">
    <div className="left-sidebar ">
        <span className=''>
            <h6 className='text-[22px] text-purple-800 px-5 font-semibold py-5'>TONG-Topup</h6>
        </span>
        <hr />
        <div className="list-items flex flex-col items-center mt-5">
            <ul>
                <li> <Link to={"/Dashboard"} >Dashboard</Link> </li>
                <li> <Link to={"/Admin/"} >Admin</Link> </li>
                <li> <Link to={"/Admin/Order-Manage"}>Manage Orders</Link> </li>
                <li> <Link to={"/Admin/User-Manage"}>Manage Users</Link> </li>
                <li> <span>Airtle Offers <IoMdArrowDropdown /></span>
                    <ul>
                        <li><Link to={"/Admin/Airtle-Data"}>Data Package</Link></li>
                        <li><Link to={"/Admin/Airtle-Bundles"}>Bundles Package</Link></li>
                        <li><Link to={"/Admin/Airtle-Minutes"}>Mintues Package</Link></li>
                    </ul>
                 </li>
                 <li><span>Robi Offers <IoMdArrowDropdown /></span>
                    <ul>
                        <li><Link to={"/Admin/Robi-Data"}>Data Package</Link></li>
                        <li><Link to={"/Admin/Robi-Bundles"}>Bundles Package</Link></li>
                        <li><Link to={"/Admin/Robi-Minutes"}>Mintues Package</Link></li>
                    </ul>
                 </li> 
                 <li> <span>Banglalink Offers <IoMdArrowDropdown /></span>
                    <ul>
                        <li><Link to={"/Admin/BanglaLink-Data"}>Data Package</Link></li>
                        <li><Link to={"/Admin/BanglaLink-Bundles"}>Bundles Package</Link></li>
                        <li><Link to={"/Admin/BanglaLink-Minutes"}>Mintues Package</Link></li>
                    </ul>
                 </li>
                 <li> <span>Banglalink Offers <IoMdArrowDropdown /></span>
                    <ul>
                        <li><Link to={"/Admin/Gp-Data"}>Data Package</Link></li>
                        <li><Link to={"/Admin/Gp-Bundles"}>Bundles Package</Link></li>
                        <li><Link to={"/Admin/Gp-Minutes"}>Mintues Package</Link></li>
                    </ul>
                 </li> 
                 <li> <span>Meta Tag <IoMdArrowDropdown /></span></li>
            </ul>
        </div>
    </div>
</div>
  )
}
