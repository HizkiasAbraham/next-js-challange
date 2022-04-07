import fs from "fs"
import path from "path"
import db from "./db.json"

function login(email, password) {
  const users = db.users
  const userIndb = users.find((user) => user.email === email)

  if (!userIndb) throw new Error("Invalid username or password")
  if (userIndb.password !== password)
    throw new Error("Invalid username or password")

  return userIndb
}

function addTask(taskData) {
  const tasks = db.tasks
  tasks.push(taskData)
  try {
    saveData({ ...db, tasks })
  } catch (e) {
    throw new Error("Unable to save task")
  }
}

function deleteTask(taskId) {
  let tasks = db.tasks
  tasks = tasks.filter((task) => task.Id !== taskId)
  try {
    saveData({ ...db, task })
  } catch (error) {}
}

function saveData(db) {
  fs.writeSync(path.join(__dirname, "./db.json"), JSON.stringify(db, null, 4))
}

export { login, addTask, deleteTask }
