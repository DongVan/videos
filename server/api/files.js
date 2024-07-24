import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
	const {folder} = getQuery(event);
	const tmpPath = folder ? `public/files/${folder}` : 'public/files';
	const directoryPath = path.join(process.cwd(), tmpPath); // Đường dẫn tới thư mục chứa file

	const getFiles = (dirPath) => {
		let results = [];
		const list = fs.readdirSync(dirPath);

		list.forEach(file => {
			const filePath = path.join(dirPath, file);
			const stat = fs.statSync(filePath);

			if (stat && stat.isDirectory()) {
				results = results.concat(getFiles(filePath));
			} else {
				results.push(filePath);
			}
		});

		return results;
	};

	try {
		const files = getFiles(directoryPath);
		const fileDetails = files.map(file => {
			const parentFolder = path.basename(path.dirname(file));
			let name = path.basename(file);
			name = parentFolder !== 'files' ? `${parentFolder}\\${name}` : name;
			return {
				name: name,
				folder: parentFolder,
				sortName: path.basename(file),
				path: file,
				size: fs.statSync(file).size,
				type: path.extname(file),
			}
		});
		return fileDetails;
	} catch (error) {
		throw createError({statusCode: 500, message: 'Error reading files'});
	}
});
