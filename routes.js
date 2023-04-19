const express = require('express');
const router = new express.Router();

router.get('/', (req,res) => {
    res.json({items})
})

router.get('/:name', (req,res) => {
    const item = items.find(i => i.name === req.params.name)
    res.json({item});
})

module.exports = router;