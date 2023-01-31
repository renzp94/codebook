import { loadMarkdown, generateDoc } from '../../../../markdown'
import type { PageServerLoad } from './$types'

export const load:PageServerLoad = (({ params: { category,id } }) => {
	const markdown = loadMarkdown(`${category}/${id}.md`)
	const doc = generateDoc(markdown)

	return { page:JSON.parse(doc) }
})