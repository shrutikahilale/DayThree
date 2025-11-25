import { createNote, getNote } from './service.js';
import { promises as fsPromises } from 'node:fs';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export const handleGrammarCheck = (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ error: "no id found", success: false })
    }

    const result = "trying level best to perform grammar check!!";

    if (result) {
        return res.status(200).json({ result: result, success: true })
    }

    res.status(500).json({ error: 'Something went wrong', success: true })
}

const extractData = async (filePath) => {
    try {
        const data = await fsPromises.readFile(filePath, 'utf8');
        console.log('File content:', data);
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
};

export const handleCreateNote = async (req, res) => {
    const filePath = req.filePath;

    const data = await extractData(filePath);
    if (!data) {
        return res.status(400).json({ error: 'Failed to save extracted data to db', success: false });
    }

    const id = await createNote(data);
    return res.status(201).json({ id: id, success: true });
}

export const handleRender = async (req, res) => {
    console.log(req.params.id);

    if (!req.params.id) return res.status(400).json({ error: "Note id not passed" });
    const note = await getNote(req.params.id);

    if (!note) return res.status(404).json({ error: "Note not found" });

    const html = md.render(note);

    res.json({ html });
}