import path from "path"
import fs from "fs/promises"
import { validateData } from "./utils/validateData.js"

export async function createFile(fileName, content) {
    const file = { fileName, content }

    const { error } = validateData(file)

    if (error) {
        console.log(`Please specify ${error.details[0].path[0]} param`)
    }
    const filePath = path.resolve("files", fileName)

    try {
        await fs.writeFile(filePath, content, "utf-8")
        console.log("file created successfully")
    } catch (error) {
        console.log(error)
    }
}