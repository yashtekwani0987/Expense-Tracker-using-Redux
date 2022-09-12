import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {addExp} from '../redux/actions/index'
import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
import {Link} from 'react-router-dom'

const Add = () => {
    const dispatch = useDispatch()
    const [title , settitle]=useState('')
    const [amount , setamount] = useState('')
    const [category , setcategory] = useState('')
    const expenses = useSelector(state=>state.expenseReducer.expenses)
    const expData = {
      id:0,
      title:'',
      amount:'',
      category:'',
      date:''
    }
    // const {register , handleSubmit , formState:{errors}} = useForm()
    // const onSubmit=(data)=>{
    //     console.log(data)
    //     dispatch(addExp(data))
    // }
    const Submit = (e)=>{

    if(title.length>=1 && amount.length>=1&& category.length>=1 ){
      let time = new Date().toLocaleDateString()
      expData.date= time
      expData.id = e.timeStamp
      expData.title = title
      expData.amount=amount
      expData.category=category
      e.preventDefault()
      console.log(expData)
      dispatch(addExp(expData))
      settitle('')
      setamount('')
      setcategory('')
    }
    else{
      e.preventDefault()
      console.log('error')
    }
    }
    
    
    
    console.log(expenses)
  
  return (
    <>
    <div className='mt-5 md:w-3/6 w-11/12 drop-shadow-lg mx-auto bg-gray-200 rounded'>
      <div className='flex justify-between text-center'>
      <Link to='/' className='mt-5 ml-4 py-1 px-2'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
Back</svg></Link>

        <Link to='/' className='mt-5 mr-4 py-1'>
    <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
</svg></Link></div>

<h1 className='text-center mt-2 text-xl font-bold rounded-full py-1 drop-shadow-lg'>Add Your Expense Here</h1>
        <form className='flex flex-col md:w-4/5 w-11/12 pb-4 mx-auto pt-4' action="">
             <input maxLength={20} value={title} onChange={(e)=>{settitle(e.target.value)}} className='py-1 px-3 mt-5 rounded-full drop-shadow-lg'  type="text" placeholder='Title (max-length-15)' />
             {/* {errors.title && 'title is Required'} */}
             <input value={amount} onChange={(e)=>{setamount(e.target.value)}} className='py-1 px-3 mt-5 rounded-full drop-shadow-lg'  type="number" placeholder='Amount' />
             {/* {errors.amount && 'amount is Required'} */}
             <input maxLength='' value={category} onChange={(e)=>{setcategory(e.target.value)}} className='py-1 px-3 mt-5 rounded-full drop-shadow-lg' placeholder='Description...(max-length-25)'/>
            {/* {errors.category && 'category is required'} */}
             <div className='text-center mt-4'>
                <button onClick={Submit} className='py-2 md:px-5 px-10 mt-5 font-bold rounded drop-shadow-lg bg-red-200 mb-5'  style={{backgroundColor:'#42f5e0'}}>Add</button>
             </div>
        </form>
    </div>
    </>  
      )
}

export default Add