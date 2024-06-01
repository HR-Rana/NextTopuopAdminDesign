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
                                <td>{items.offer}</td>
                                <td>{items.operator}</td>
                                <td>{items.mobile}</td>
                                <td>{items.status}</td>
                                <td><span className='flex justify-center gap-2'><button className='text-green-800'><FaEdit /></button> <button className='text-red-500'><FaTrashAlt /></button></span></td>
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
