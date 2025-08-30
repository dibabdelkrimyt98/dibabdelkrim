const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();


const uploadDir = path.join(__dirname, '..', process.env.UPLOAD_DIR || 'uploads');
if (!fs.existsSync(uploadDir)) {
fs.mkdirSync(uploadDir, { recursive: true });
}


const storage = multer.diskStorage({
destination: (req, file, cb) => cb(null, uploadDir),
filename: (req, file, cb) => {
const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
cb(null, unique + path.extname(file.originalname));
},
});


const fileFilter = (req, file, cb) => {
// accept common docs & pdfs
const allowed = [
'application/pdf',
'application/msword',
'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];
if (allowed.includes(file.mimetype)) cb(null, true);
else cb(new Error('Unsupported file type'));
};


const upload = multer({ storage, fileFilter, limits: { fileSize: 10 * 1024 * 1024 } });


module.exports = { upload };