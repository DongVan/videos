import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
	const directoryPath = path.join(process.cwd(), 'public/files'); // Đường dẫn tới thư mục chứa file
	return new Promise((resolve, reject) => {
		fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
			if (err || !files || Object.keys(files).length === 0) {
				reject(createError({ statusCode: 500, message: 'Unable to scan directory' }));
			}
			const fileList = files.map(file => ({
				name: file.name,
				type: file.isDirectory() ? 'directory' : 'file',
				size: file.isFile() ? fs.statSync(path.join(directoryPath, file.name)).size : null,
				path: path.join(directoryPath, file.name)
			}));
			resolve(fileList);
		});
	});
});
