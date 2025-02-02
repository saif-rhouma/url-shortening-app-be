import path from 'path';

// Define the file type
export const FILE_TYPE = 'png';

// Define host storage in case of different host storage (Should be imported from Env)
export const HOST_NAME = 'http://localhost:5001/api';

export const QR_FILES_PATH = path.join(__dirname, '../public');
