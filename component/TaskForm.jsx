import prisma from "@/utils/db";
import { createTask } from "@/utils/action";

const TaskForm = () => {
    return (
        <form action={createTask}>
            <div className="join w-full">
                <input
                    type="text"
                    className="input join-item w-full input-bordered"
                    placeholder="type here"
                    name="content"
                    required
                />
                <button type="submit" className="btn btn-primary join-item">create task</button>
                  </div>
        </form>
  )
}

export default TaskForm