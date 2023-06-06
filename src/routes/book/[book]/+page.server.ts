import { loadMarkdownDir } from '../../../markdown'
import type { PageServerLoad } from './$types'

export const load:PageServerLoad = (({ params: { book } }) => {
	const articles = loadMarkdownDir(book).reverse()

	return { articles, category: book }
})