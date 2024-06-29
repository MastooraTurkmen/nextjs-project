'use client';
import { createTaskCustom } from "@/utils/action";
import { useEffect } from "react";
import {useFormStatus, useFormState} from 'react-dom'
import toast from "react-hot-toast";

const SubmitButton = () => {
    const { pending } = useFormStatus() 
    return (
        <button type="submit" className="btn btn-primary join-item" disabled={pending}>
            {pending ? 'please wait...' : 'create task'}
        </button>
    )
}

const initialState = () => {
    message: null
}

const TaskForm = () => {
    const [state, formAction] = useFormState(createTaskCustom, initialState)
    useEffect(() => {
        if (state.message === 'error') {
            toast.error('there was an error')
        }
        if (state.message) {
            toast.success('task created');
        }
    }, [state])
    
    return (
        <form action={formAction}>
            {state.message ? <p className="mb-2">{state.message}</p>: null}
            <div className="join w-full">
                <input
                    type="text"
                    className="input join-item w-full input-bordered"
                    placeholder="type here"
                    name="content"
                    required
                />
                <SubmitButton />
            </div>
        </form>
  )
}

export default TaskForm