"use client"

import { useEffect, useState } from "react"
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  const [newtask, setNewTask] = useState({ title: "", description: "" })
  const [allTasks, setAllTasks] = useState(null)


  const onChangeHandler = (e) => {
    setNewTask({ ...newtask, [e.target.name]: e.target.value })
  }

  const addTask = ()=>{
    const task = {
      "title":newtask.title,
      "description":newtask.description,
      "status":"todo"
    }

    const newArray = allTasks ? [...allTasks, task] : [task]

    localStorage.setItem("mytodos", JSON.stringify(newArray))
    setNewTask({ title: "", description: "" })

  }

  useEffect(()=>{
    let tasks = localStorage.getItem('mytodos')
    if(tasks !== null){``
      tasks = JSON.parse(tasks);
      setAllTasks(tasks)
    
    }
    
  },[addTask])


  return (
    <div className='wrapper'>
      <nav>
        <header class="text-gray-600 body-font p-4">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">TaskMS</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a class="mr-5 hover:text-gray-900">Home</a>
              <a class="mr-5 hover:text-gray-900">About</a>
              <a class="mr-5 hover:text-gray-900">Contact</a>
              <a class="mr-5 hover:text-gray-900">Help</a>
            </nav>

          </div>
        </header>
      </nav>
      <div className="headTxt w-full flex items-center justify-center flex-col mt-5">
        <h1 className='text-5xl font-extrabold text-gray-800'>TASK MANAGEMENT SYSTEM</h1>
        <h2 className='text-2xl font-semibold'>Simple and Manageable</h2>
        <p className='mt-2 text-gray-600'>Task management software is an application that helps organize, streamline, and prioritize tasks required to achieve a goal or complete a project.</p>
      </div>
      <div className="form">
        <section class="text-gray-600 body-font relative">

          <div class="container px-5 py-24 mx-auto flex items-center justify-center">
            <div class="lg:w-2/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col items-center justify-center  w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">TaskMS</h2>
              <p class="leading-relaxed mb-5 text-gray-600">Create A Task</p>
              <div class="relative mb-4 w-full">
                <label for="title" class="leading-7 text-sm text-gray-600">Title</label>
                <input type="title" id="title" name="title" value={newtask.title} onChange={onChangeHandler} class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div class="relative mb-4 w-full">
                <label for="description" class="leading-7 text-sm text-gray-600">Description</label>
                <textarea id="description" name="description" value={newtask.description} onChange={onChangeHandler} class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button onClick={addTask} class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Create</button>
              <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="alltasks w-full flex items-center justify-center flex-col">
        <h3 className="font-bold text-2xl text-gray-700">All Tasks</h3>
        <div className="w-[35%] flex items-center p-4 justify-between" >
          <span className="w-1/3 flex items-center justify-center font-semibold bg-blue-600 py-3 rounded-lg text-white">To Do</span>
          <span className="w-1/3 flex mx-4 items-center justify-center font-semibold bg-yellow-600 py-3 rounded-lg text-white">In Progress</span>
          <span className="w-1/3 flex items-center justify-center font-semibold bg-green-600 py-3 rounded-lg text-white">Completed</span>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-12 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap items-center justify-center -m-4">
           

              { allTasks &&
                allTasks.map((item,index)=>{
                  return  <div key={index} class=" lg:w-[600px] m-2 md:w-full shadow-lg bg-white rounded-lg">
                  <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{item.title}</h2>
                      <p class="leading-relaxed text-base">{item.description}</p>
                      <div >
                        <select className="p-2 text-sm font-semibold mt-2 rounded bg-blue-700 text-white" id="status" name="status">
                          <option value="todo" selected>To Do</option>
                          <option value="progress">Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>
                      <div className="w-full flex items-center justify-end p-2 gap-2">
                      <i class="ri-edit-box-fill text-2xl text-yellow-500 cursor-pointer"></i>
                      <i class="ri-delete-bin-5-fill text-2xl text-red-500 cursor-pointer"></i>
                      </div>
  
                    </div>
                  </div>
                </div>
                })
              }
             
          
             
            </div>
          </div>
        </section>
      </div>
      <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
      <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    </div>
  )
}

export default Home
