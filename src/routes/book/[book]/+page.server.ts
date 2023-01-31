import { loadMarkdownDir } from '../../../markdown'
import type { PageServerLoad } from './$types'

export const load:PageServerLoad = (({ params: { book } }) => {
	const articles = loadMarkdownDir(book)

	return { articles, category: book }
})