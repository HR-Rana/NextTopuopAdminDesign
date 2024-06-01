import React from 'react'
import { AirtleTbodyData, AirtleTheadData } from '../../assets/TableData'
import MakeOffer from '../../assets/MakeOffer/MakeOffer'

export default function RobiBundles() {
  return (
    <div>
         <div className='my-5'>
      <h5>Robi Bundles</h5>
    </div>

    <div className="table py-5 px-3 shadow-lg shadow-gray-500 w-full">
    <MakeOffer
     thead={AirtleTheadData} tbody={AirtleTbodyData} />
    </div>
    </div>
  )
}
