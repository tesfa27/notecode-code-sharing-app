const express = require('express');
const { createSnippet, getSnippetById } = require('../controllers/snippet.controller');

const router = express.Router();

router.post('/', createSnippet);
router.get('/:id', getSnippetById);

module.exports = router;
