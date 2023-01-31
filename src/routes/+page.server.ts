import fs from 'fs'
import { MD_BASE_PATH } from '$lib/config'

export const load = (() => {
    const fileList = fs.readdirSync(MD_BASE_PATH)
    const books = fileList.filter(filename => {
        const state = fs.statSync(`${MD_BASE_PATH}/${filename}`)
        return state.isDirectory()
    })

    return { books }
})