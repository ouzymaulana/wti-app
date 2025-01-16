import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css';

type DataType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const ApiIntegration = () => {
 const [data, setData] = useState<DataType[]>([]);

  const getData = async (value?: number) => {
    const url = value 
    ? `https://jsonplaceholder.typicode.com/todos/${value}` 
    : `https://jsonplaceholder.typicode.com/todos`;
    try {
       await axios.get(url)
       .then((response) => {
          if (response.status === 200) {
              setData(response.data); 
              const data = response.data;
              const result = Array.isArray(data) ? data : [data];
              
              setData(result);
          }
       })
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData(1);
  }, [])

  return (
    <div className='flex justify-center items-cente'>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 ">List Data</h5>
              <button onClick={() => getData()} className="text-sm font-medium text-blue-600 hover:underline">
                  View all
              </button>
        </div>
        <div className="flow-root">
            {data.length > 0 && (
              <ul role="list" className="divide-y divide-gray-200 max-h-96 custom-scrollbar">
                    {data.map((item: DataType, index: number) => (
                      <li className="py-3 sm:py-4" key={index}>
                          <div className="flex gap-2 items-center">
                              <div className="flex-1">
                                <span className="text-sm font-medium text-gray-900 break-words">
                                  {item.title}
                                </span>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                {item.completed ? (
                                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                  </svg>
                                ) : (
                                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4l8 8M12 4l-8 8"/>
                                  </svg>
                                )}
                              </div>
                          </div>
                      </li>
                    ))}
              </ul>
            )}
        </div>
      </div>
    </div>
  )
}

export default ApiIntegration
