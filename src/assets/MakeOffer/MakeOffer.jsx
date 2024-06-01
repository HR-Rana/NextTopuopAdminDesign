import React from 'react'
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";




export default function MakeOffer({tbody, thead}) {
  return (
    <div>
        <div className='my-3 py-2'>
          <button className='w-full bg-purple-500 text-white font-semibold py-2 rounded-md'>{"Add Package"}</button>
        </div>


        <div className="addPackage-tab">
          <table>
              <thead>
                <th>Id</th>
                  {
                    thead.map((items, i) =>{
                      return(
                        <th className='' key={i}>
                          
                          {items.name}
                        </th>
                      )
                    })
                  }
            </thead>
            <tbody>
                {
                  tbody.map((items, i=1) =>{
                    return(
                      <tr className='' key={i}>
                          <td>{i}</td>
                          <td>{items.package}</td>
                          <td>{items.discount}</td>
                          <td>{items.todyPrice}</td>
                          <td>{items.officialPrice}</td>
                          <td>{items.Priod}</td>
                          <td>
                             <span className='flex justify-center gap-2'><button className='text-green-800'><FaEdit /></button> <button className='text-red-500'><FaTrashAlt /></button></span>
                           </td>
                      </tr>
                    )
                  })
                }
            </tbody>
            <tfoot>
                <tr>
                  <th>Id</th>
                  {
                    thead.map((items, i) =>{
                      return(
                        <th className='' key={i}>
                          {items.name}
                        </th>
                      )
                    })
                  }
                </tr>
            </tfoot>
          </table>
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
