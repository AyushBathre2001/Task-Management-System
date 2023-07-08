"use client"

import Modal from "@/components/Modal"
import { useEffect, useState } from "react"
import 'remixicon/fonts/remixicon.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [newtask, setNewTask] = useState({ title: "", description: "" })
  const [allTasks, setAllTasks] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [dynamicProp, setDynamicProp] = useState({ id: "", title: "", desc: "", status: "" })


  const onChangeHandler = (e) => {
    setNewTask({ ...newtask, [e.target.name]: e.target.value })
  }

  const fetchTasks = (status) => {
    let tasks = localStorage.getItem('mytodos')
    if (tasks !== null) {
      tasks = JSON.parse(tasks);
      let todos = tasks.filter((item) => {
        if (item.status === status) {
          return item
        }
      })
      setAllTasks(todos)
    }
  }

  const addTask = () => {
   
    var randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const task = {
      "id": randomNumber,
      "title": newtask.title,
      "description": newtask.description,
      "status": "todo"
    }

    let tasks = localStorage.getItem('mytodos')
    if (tasks !== null) {
      tasks = JSON.parse(tasks);
      const newArray = [...tasks, task]

      localStorage.setItem("mytodos", JSON.stringify(newArray))
      setNewTask({ title: "", description: "" })
      fetchTasks("todo")
    }

    toast.success('Task has been added.', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const changeStatus = (id, status) => {
    let tasks = localStorage.getItem('mytodos')
    if (tasks) {
      tasks = JSON.parse(tasks)

      let newArray = tasks.map((item) => {
        if (item.id === id) {
          return { ...item, status }
        } else {
          return item
        }
      });

      localStorage.setItem('mytodos', JSON.stringify(newArray))
      fetchTasks("todo")
    }
    toast.info(`Task has been moved to ${status} section`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };


  const deleteTask = (id,status) => {
    let tasks = localStorage.getItem('mytodos')
    if (tasks) {
      tasks = JSON.parse(tasks)
      let newArray = tasks.filter((item) => {
        if (item.id !== id) {
          return item
        }
      })
      localStorage.setItem('mytodos', JSON.stringify(newArray))
      fetchTasks(status)
    }

    toast.error('Task has been deleted.', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  useEffect(() => {
    fetchTasks("todo")

  }, [])

  const closeModal = () => {
    setShowModal(false)

  }



  return (
    <div className='wrapper'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="headTxt w-full flex items-center justify-center flex-col p-4 mt-5">
        <h1 className='text-5xl font-extrabold text-center text-gray-800'>TASK MANAGEMENT SYSTEM</h1>
        <h2 className='text-2xl font-semibold'>Simple and Manageable</h2>
        <p className='mt-2 text-gray-600 text-center'>Task management software is an application that helps organize, streamline, and prioritize tasks required to achieve a goal or complete a project.</p>
      </div>
      <div className="form">
        <section className="text-gray-600 body-font relative">

          <div className="container px-5 py-24 mx-auto flex items-center justify-center">
            <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col items-center justify-center  w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">TaskMS</h2>
              <p className="leading-relaxed mb-5 text-gray-600">Create A Task</p>
              <div className="relative mb-4 w-full">
                <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
                <input type="title" id="title" name="title" value={newtask.title} onChange={onChangeHandler} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4 w-full">
                <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
                <textarea id="description" name="description" value={newtask.description} onChange={onChangeHandler} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button disabled = {newtask.title && newtask.description ? false: true} onClick={addTask} className="text-white disabled:bg-blue-200 bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Create</button>
            </div>
          </div>
        </section>
      </div>

      <div className="alltasks w-full flex items-center justify-center flex-col">
        {showModal && <Modal edit={dynamicProp} onClose={closeModal} fetch={fetchTasks} />}

        <h3 className="font-bold text-2xl text-gray-700">All Tasks</h3>
        <div className="w-[50%] flex items-center flex-wrap p-4 justify-center" >
          <span onClick={() => { fetchTasks("todo") }} className="w-[120px]  mt-2 flex items-center justify-center font-semibold bg-blue-600 py-3 rounded-lg cursor-pointer hover:bg-blue-800 text-white">To Do</span>
          <span onClick={() => { fetchTasks("progress") }} className="w-[120px] mt-2  flex mx-4 items-center justify-center font-semibold bg-yellow-600 py-3 cursor-pointer hover:bg-yellow-800 rounded-lg text-white">In Progress</span>
          <span onClick={() => { fetchTasks("completed") }} className="w-[120px] mt-2  flex items-center justify-center font-semibold bg-green-600 py-3 hover:bg-green-800 cursor-pointer rounded-lg text-white">Completed</span>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-12 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap items-center justify-center min-h-[30vh] -m-4">
              {(allTasks === null || allTasks.length < 1) && <p>Nothing is here.</p>}

              {allTasks &&
                allTasks.map((item, index) => {
                  return <div key={item.id} className=" lg:w-[500px] m-2 md:w-full shadow-lg bg-white rounded-lg">
                    <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                      <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{item.title}</h2>
                        <p className="leading-relaxed text-base">{item.description}</p>
                        {
                          item.status === "todo" && <div >
                            <select onChange={(e) => { changeStatus(item.id, e.target.value) }} className="p-2 text-sm font-semibold mt-2 rounded bg-blue-500 text-white" id="status" name="status">
                              <option value="todo" selected>To Do</option>
                              <option value="progress">Progress</option>
                              <option value="completed">Completed</option>
                            </select>
                          </div>
                        }
                        {
                          item.status === "progress" && <div >
                            <select onChange={(e) => { changeStatus(item.id, e.target.value) }} className="p-2 text-sm font-semibold mt-2 rounded bg-blue-700 text-white" id="status" name="status">
                              <option value="progress" selected>Progress</option>
                              <option value="completed">Completed</option>
                            </select>
                          </div>
                        }

                        <div className="w-full flex items-center justify-end p-2 gap-2">
                          <i onClick={() => { setShowModal(true); setDynamicProp({ id: item.id, title: item.title, desc: item.description, status: item.status }) }} className="ri-edit-box-fill text-2xl text-yellow-500 cursor-pointer"></i>
                          <i onClick={() => { deleteTask(item.id,item.status) }} className="ri-delete-bin-5-fill text-2xl text-red-500 cursor-pointer"></i>
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

    </div>
  )
}

export default Home
