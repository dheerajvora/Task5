import React from 'react'
import DATA from '../data.json'
export default function TableScreen() {
    const [data, setData] = React.useState<any[]>([...DATA.employees.employee])
    const [showTable, setShowTable] = React.useState(true)
    console.log('data', data)
    return (
        <div className="p-8">
            <button 
                onClick={() => setShowTable(!showTable)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
            >
                {showTable ? 'Hide Table' : 'Show Table'}
            </button>
            
            {showTable && (
                <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Id</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">First Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Last Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Photo</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {
                            data.map((employee) => (
                                <tr key={employee.id} className="hover:bg-gray-50 transition-colors duration-200">
                                    <td className="px-6 py-4 text-sm text-gray-600">{employee.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{employee.firstName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{employee.lastName}</td>
                                    <td className="px-6 py-4">
                                        <img 
                                            src={employee.photo} 
                                            alt={employee.firstName}
                                            className="w-12 h-12 rounded-full object-cover" 
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}
        </div>
    )
}
