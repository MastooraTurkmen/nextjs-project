import prisma from "@/utils/db"

const prismaHandlers = async () => {
    await prisma.task.create({
        data: {
            content: 'wake up'
        },
    })
    const allTask = await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        }
    })
    return allTask
}

const prismaExample = async () => {
    const tasks = await prismaHandlers()
    if (tasks.length === 0) {
        return <h2 className="mt-8 font-medium text-lg">No tasks to show..</h2>
    }
    return (
        <div>
            <h1 className="text-7xl">
                {tasks.map((tasks) => {
                    return <h2 key={tasks.id} className="text-xl py-2">
                        {tasks.content}
                    </h2>
                })}
            </h1>
        </div>
    )
}

export default prismaExample