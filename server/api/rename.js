import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
	const { oldName, newName } = await readBody(event);
	const directoryPath = path.join(process.cwd(), 'public/files');
	const oldPath = path.join(directoryPath, oldName);
	const newPath = path.join(directoryPath, newName);

	if (!fs.existsSync(oldPath)) {
		throw createError({ statusCode: 404, message: 'File not found' });
	}

	if (fs.existsSync(newPath)) {
		throw createError({ statusCode: 400, message: 'New file name already exists' });
	}

	fs.renameSync(oldPath, newPath);

	return {
		success: true,
		message: 'File renamed successfully'
	};
});
