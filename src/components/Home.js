import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteExp } from '../redux/actions/index'
import { useEffect } from 'react'

const Home = () => {
const expense = useSelector(state=>state.expenseReducer.expensesList)

const sum = expense.reduce((val,obj)=>{
    return val + +obj.amount
},0)

const dispatch = useDispatch()


return ( <>
    <div className='md:w-3/6 w-11/12 mx-auto mt-10 '>
        <h1 className='text-2xl text-center py-1 px-4 bg-gray-200 font-bold drop-shadow-lg rounded'>Expenses list</h1>
        <div className='mt-5 flex justify-end'>
         <Link to='/add' className='border-2 drop-shadow-lg border-black px-2 rounded'> Add </Link>
         </div>
         <hr className='mt-2' />

  
    {expense.map((val,key)=>{  
        return(
            <>
            <div className='mx-auto drop-shadow-lg mt-5'>
        <div className='p-2 md:w-4/5 w-full md:mr-10 mr-4 mx-auto rounded flex justify-between bg-gray-200'>
            <div className='flex flex-col'>
            <h1 className='text-gray-400'>{val.date}</h1>
           <h1 className='text-xl font-bold'>{val.title}</h1>
           <h2 className='font-bold'>{val.category}</h2>
        </div>
        {/* <div>
            
           <h1>{val.date}</h1>
        </div> */}
           <div className='flex flex-col items-end justify-between'>
            <div> 
           <button className='xrounded-full' onClick={()=>{dispatch(deleteExp(val))}}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clipRule="evenodd" />
</svg>
           </button></div>   
           <h1 className='font-bold'>₹{val.amount}</h1>
           </div>
           
           
        </div>
        </div>
       
        </>      )})}    
        <hr className='mt-5 bg-black text-black' />
        <div className='w-3/6 mx-auto flex justify-between items-center mt-2'>
            <h1 className='text-xl font-bold'>Total</h1>
            <h2 className='text-xl font-bold'>₹{sum}</h2>
        </div> 
       
    </div>
    </>

  )
}

export default Home