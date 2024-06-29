import EditeForm from "@/component/EditeForm"
import { getTask } from "@/utils/action"
import Link from "next/link"

const SingleTaskPage = async ({ params }) => {
    const task = await getTask(params.id)
    return (
        <div className="mb-16">
            <Link href='/tasks' className="btn btn-accent">back to tasks</Link>
            <EditeForm task={task} />
        </div>
    )
}

export default SingleTaskPage