import express from 'express';
import { Book } from '../models/Book.js';

const router = express.Router()

router.get('/get-book', (req, res) => {
})
router.post('/add-book', (req, res) => {

    const name = req.body.name
    const author = req.body.author
    const description = req.body.description

    const book = new Book({
        name,
        author,
        description,
    })
    book.save()
    res.send(book)
})
router.put('', (req, res) => {

})
router.delete('/remove-book', (req, res) => {

})

export { router as bookRouter };
