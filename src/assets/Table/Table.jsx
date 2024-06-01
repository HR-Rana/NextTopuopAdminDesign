import React from 'react'
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


export default function Table({thData, tbodyData}) {
    return (
        <table className="table border-black">
            <thead>
                {
                    thData.map((item, i)=>{
                        return(
                            <th key={i}>{item.name}</th>
                        )
                    })
                }
            </thead>
            <tbody>
                {
                    tbodyData.map((items, i)=>{
                        return(
                            <tr className='' key={i}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                               {
                                items.offer ?  <td>{items.offer}</td> :null
                               }
                               {
                                items.operator ?  <td>{items.operator}</td> :null
                               }
                                <td>{items.mobile}</td>
                               {
                                items.time ? <td>{items.time}</td> :null
                               }
                                
                                {
                                    items.status ? <td>{items.status}</td> : null
                                }
                                <td>
                                    {
                                        !items.mobile ? <span className='flex justify-center gap-2'><button className='text-green-800'><FaEdit /></button> <button className='text-red-500'><FaTrashAlt /></button></span> : <button className='bg-red-700 text-white rounded-md py-1 w-[80%] mx-auto'>Disable</button>
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
            {
                    thData.map((item, i)=>{
                        return(
                            <th key={i}>{item.name}</th>
                        )
                    })
                }
            </tfoot>
        </table>
    )
}
