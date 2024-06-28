import TaskForm from "@/component/TaskForm"
import TaskList from "@/component/TaskList"

const TaskPage = () => {
    return (
        <div className="max-x-lg">
            <TaskForm />
            <TaskList />
        </div>
    )
}

export default TaskPage