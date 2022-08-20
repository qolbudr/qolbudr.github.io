export const createSlug = (item) => {
	const title = item.title.toLowerCase().split(' ')
	let slug = title[0] + '-' + title[1] + '-' + title[2] + '-' + item.id
	return slug
} 