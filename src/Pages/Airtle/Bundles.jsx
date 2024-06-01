import React from 'react'
import Table from '../../assets/Table/Table'
import { TableBody, TableHeading } from '../../assets/TableData'

export default function AirtleBundles() {
  return (
    <div>
      <div className=''>
        <h5>Airtle Bundles</h5>
      </div>

      <div className="table py-5 px-3 shadow-lg shadow-gray-500">
          <div className="heading">
              <span>
                <input type="Search" placeholder='Search Here' value={''} />
              </span>
          </div>
          <span>
            <Table thData={TableHeading}  tbodyData={TableBody} />
          </span>
      </div>
    </div>
  )
}
