import React from 'react'
import MakeOffer from '../../assets/MakeOffer/MakeOffer'
import { AirtleTbodyData, AirtleTheadData } from '../../assets/TableData'

export default function RobiData() {
  return (
    <div>
         <div className='my-5'>
      <h5>Robi Data</h5>
    </div>

    <div className="table py-5 px-3 shadow-lg shadow-gray-500 w-full">
    <MakeOffer thead={AirtleTheadData} tbody={AirtleTbodyData} />
    </div>
    </div>
  )
}
