const express = require("express");
const router = express.Router();

const Student = require("../mongoshiv")
router.get('/', (req, res) => {
    res.send("hello manish kumar")
});
router.get('/use', async(req, res) => {
    try {
        const student = await Student.find();
        res.send(student);
    } catch (e) {
        res.send(e)
    }

});
router.get('/use/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const student = await Student.findById(_id);
        res.send(student);
    } catch (e) {
        res.send(e)
    }

});
router.delete('/delete/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const student = await Student.findByIdAndDelete(_id);
        res.send(student);
    } catch (e) {
        res.send(e)
    }

});
router.put('/put/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const student = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(student);
    } catch (e) {
        res.send(e)
    }

});
router.post('/post', (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.send(e);
    })

});
module.exports = router;