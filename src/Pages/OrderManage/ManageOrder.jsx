import React from 'react'
import Table from '../../assets/Table/Table'
import { TableBody, TableHeading } from '../../assets/TableData'
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";



export default function ManageOrder() {
  return (
    <div>
      <div className='Page-heading mt-5 ml-1'>   
        <h5>Order list Page</h5>
       </div>


      <div className="table-area my-5 py-7 px-3 shadow-lg shadow-gray-300 rounded-md">
          <div className="heading">
              <span>
                <input type="Search" placeholder='Search Here' className='px-3 py-2 mb-3 min-w-full rounded-md bg-gray-100 outline-none' value={''} />
              </span>
          </div>
          <span>
            <Table thData={TableHeading}  tbodyData={TableBody} />
          </span>
          <div className="paginaton">
           <span className=''>
              <button><TfiAngleLeft /></button>
              <button>1</button>
              <button>2</button>
              <button><TfiAngleRight /></button>
           </span>
          </div>
      </div>
    </div>
  )
}
