const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 4000;

// CORS to allow cross-origin requests
app.use(cors());
app.use(express.static('public'));

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/'); // Store uploaded files in the 'public/uploads' directory
    },
    filename: (req, file, cb) => {
        // Generate a unique filename
        const uniquePrefix = Date.now() + '-';
        const filename = uniquePrefix + file.originalname;
        cb(null, filename);
    },
});

const upload = multer({ storage: storage });

// Route for handling image uploads
app.post('/upload_image', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No image file provided.' });
    }

    // Log the file details
    console.log('Uploaded File:');
    console.log('  Name:', req.file.filename);
    console.log('  Size:', req.file.size, 'bytes');
    console.log('  Mimetype:', req.file.mimetype);
    console.log('  Path:', req.file.path);


    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({
        imageUrl: imageUrl,
        message: 'Image uploaded successfully!',
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});