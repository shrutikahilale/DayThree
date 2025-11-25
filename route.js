import { Router } from "express";
import multer from "multer";
import {handleGrammarCheck, handleCreateNote, handleRender} from './controller.js'

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/texts'); // Specify the directory where files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single("file"), async (req, res) => {
    // 'myFile' is the name of the input field in your HTML form
    if (req.file) {
        console.log('File uploaded:', req.file);

        // call service to save extracted text to db and return note id

        req.filePath = req.file.destination + '/'+req.file.filename;

        await handleCreateNote(req, res);
    } else {
        res.status(400).send('No file uploaded.');
    }
});

router.get('/grammar-check/:id', handleGrammarCheck);

router.get('/notes/:id/render', handleRender)

export default router;