📘 Markdown Notes API — Learnings Summary

This project helped me understand several important backend concepts, especially around file handling and Markdown rendering.

🚀 What I Learned
1. File Uploads with Multer

Integrated Multer into an Express backend for handling file uploads.

Configured diskStorage to control:

Destination folders

File naming strategy

Learned how Multer processes different input types like text, markdown, and images.

2. Avoiding File Name Collisions

Implemented unique file naming using:

Timestamps

UUIDs

Preserving original file extensions

Ensured no overwriting happens on repeated uploads.

3. Handling Different File Types

Gained hands-on experience reading and processing:

.txt files

.md Markdown files

Images (uploading and storing them)

4. File Reading & Extraction

Used Node’s fs and fs/promises modules to:

Read file contents

Extract text safely

Handle errors gracefully during file operations

5. Rendering Markdown → HTML

Used the markdown-it library to convert Markdown content into HTML.

Built an endpoint that returns rendered HTML to be consumed directly by UI.

📚 Overall Takeaway

This project strengthened my understanding of backend API development, especially real-world concepts like file uploads, text extraction, Markdown rendering, and safe file storage practices.