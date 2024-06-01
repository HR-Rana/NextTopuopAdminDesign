import React from 'react'

export default function Table({thData, tbodyData}) {
    return (
        <table className="table  border-black border-[1px]">
            <thead>
                {
                    thData.map((items, i)=>{
                        return(
                            <th className='' key={i}>{items}</th>
                        )
                    })
                }
            </thead>
            <tbody>
                {
                    tbody.map((items, i)=>{
                        return(
                            <tr className='' key={i}>
                                <td>{items}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
