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