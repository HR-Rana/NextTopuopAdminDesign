import React from 'react'
import Table from '../../assets/Table/Table'

export default function AirtleBundles() {
  return (
    <div>
      

      <div className="table py-5 px-3 shadow-lg shadow-gray-500">
          <div className="heading">
              <span>
                <input type="Search" placeholder='Search Here' value={''} />
              </span>
          </div>
          <span>
            <Table />
          </span>
      </div>
    </div>
  )
}
