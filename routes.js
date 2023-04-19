const express = require('express');
const router = new express.Router();

router.get('/', (req,res) => {
    res.json({items})
})

router.get('/:name', (req,res) => {
    const item = items.find(i => i.name === req.params.name)
    res.json({item});
})

router.post('/', (req,res) => {
    const newItem = {name: req.body.name, price: req.body.price};
    items.push(newItem);
    res.status(201).json({added: newItem});
})

router.patch('/:name', (req,res) => {
    const item = items.find(i => i.name === req.params.name)
    item.name = req.body.name;
    item.price = req.body.price;
    res.status(201).json({updated: item});
})

router.delete('/:name', (req,res) => {
    const item = items.find(i => i.name === req.params.name)
    items.splice(item, 1);
    res.json({message: "Deleted"});
})

module.exports = router;