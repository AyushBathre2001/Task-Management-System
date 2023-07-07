import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({edit,onClose,fetch}) => {

  const [details,setDetails] = useState({title:edit.title,description:edit.desc})

  const handleOnchange = (e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
  }

  const editTask = ()=>{
    let tasks = localStorage.getItem('mytodos')
    if(tasks){
      tasks = JSON.parse(tasks)
      let newArray = tasks.map((item)=>{
        if(item.id === edit.id){
          return {...item,title:details.title, description:details.description}
        }
        else {
          return item
        }
      })

      localStorage.setItem('mytodos',JSON.stringify(newArray))
      fetch(edit.status)
      toast.success('Task has been updated.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      onClose()

    }
  }

  return (
    <div className={`shadow flex items-center justify-center z-20 w-full fixed top-0 min-h-screen bg-white bg-opacity-60 `}>
      <div className="modal relative p-6 flex flex-col items-center justify-start w-[400px] h-[450px] rounded-md bg-blue-100 shadow-lg ">
      <i onClick={onClose} class="ri-close-circle-fill absolute text-2xl top-1 right-1 cursor-pointer"></i>
        <p className='font-semibold text-xl text-gray-700'>Edit</p>
        <div className='flex mt-8 w-[80%] flex-col items-start justify-center '>
            <label htmlFor="title">Title</label>
            <input value={details.title} name='title' id='title' onChange={handleOnchange} className ='w-full p-2 rounded-md' type="text" />
        </div>
        <div className='flex w-[80%] mt-4 flex-col items-start justify-center '>
            <label htmlFor="description">Description</label>
            <textarea value={details.description} name="description" id = "description" onChange={handleOnchange} className='w-full p-2 rounded-md' cols="30" rows="7"></textarea>
        </div>
        <div>
            <button onClick={editTask} className='px-3 py-1 bg-blue-600 text-white font-semibold rounded-md mt-5'>Update</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
