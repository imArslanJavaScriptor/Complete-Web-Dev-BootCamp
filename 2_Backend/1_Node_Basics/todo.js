const fs = require("fs")
const filePath = "./tasks.json"

const command = process.argv[2]
const argument = process.argv[3]

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        return JSON.parse(dataBuffer.toString())
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2)) // formatted JSON
}

const addTask = (taskName) => {
    const tasks = loadTasks()
    tasks.push({ id: Date.now(), name: taskName })
    saveTasks(tasks)
    console.log("✅ Task Added:", taskName)
}

const listTasks = () => {
    const tasks = loadTasks()
    if (tasks.length === 0) {
        console.log("📭 No tasks found.")
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.name}`)
        })
    }
}

const removeTask = (taskIndex) => {
    const tasks = loadTasks()
    if (taskIndex < 1 || taskIndex > tasks.length) {
        console.log("❌ Invalid task index.")
        return
    }
    const removed = tasks.splice(taskIndex - 1, 1)
    saveTasks(tasks)
    console.log(`🗑️ Task Removed: ${removed[0].name}`)
}

switch (command) {
    case "add":
        addTask(argument)
        break
    case "list":
        listTasks()
        break
    case "remove":
        removeTask(parseInt(argument))
        break
    default:
        console.log("❓ Unknown command.")
        console.log("Usage: node app.js [add|list|remove] [task or index]")
}
