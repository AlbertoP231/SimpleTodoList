"use client";
import { FormEventHandler, useState } from 'react'
import { AiOutlinePlus} from 'react-icons/ai'
import Modal from './Modal'
import { addTodo } from '@/api';


const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskvalue, setNewTaskVale] = useState<string>('')

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = 
  async (e) => {
    e.preventDefault();
    await addTodo({
      id: "4",
      text: newTaskvalue,

    })
    setNewTaskVale("");
  };
  return (
    <div>
        <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full'> Add new task
        <AiOutlinePlus  className='ml-2' size={18} /></button>

        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <form onSubmit={handleSubmitNewTodo}>
              <h3 className='font-bold text-lg'>Add new task</h3>
               <div className="modal-action">
               <input
               value={newTaskvalue}
               onChange={(e) => setNewTaskVale(e.target.value)}
                type="text" placeholder="Type here" className="input input-bordered w-full w-full" />
               <button type='submit' className='brtn'>Submit</button>
               </div>
            </form>
        </Modal>
    </div>
    
  )
}

export default AddTask