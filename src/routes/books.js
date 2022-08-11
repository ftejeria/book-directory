import express from 'express';
import { Book } from '../models/Book.js';

const router = express.Router()

router.get('/get-book', (req, res) => {
})
router.post('/add-book', (req, res) => {
    const book = new Book(req.body.name, req.body.author, req.body.version)
    res.send(book)
})
router.put('', (req, res) => {

})
router.delete('/remove-book', (req, res) => {

})

export { router as bookRouter };
