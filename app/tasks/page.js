import TaskForm from "@/component/TaskForm"
import TaskFormCustom from "@/component/TaskFormCustom"
import TaskList from "@/component/TaskList"

const TaskPage = () => {
    return (
        <div className="max-x-lg">
            <TaskFormCustom />
            <TaskList />
        </div>
    )
}

export default TaskPage