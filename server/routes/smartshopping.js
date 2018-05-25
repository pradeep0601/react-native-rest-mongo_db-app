const express = require('express');

const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/', userController.create);

router.get('/', userController.findAllUser);

router.put('/', userController.updateUser);

router.delete('/', userController.deleteUser);


// // to use database hosted on mlab
// const mongojs = require('mongojs');
// const db = mongojs('mongodb://pradeep:pradeep@ds229290.mlab.com:29290/smartshopping', ['user']);

// router.get('/', (req, res) => {
//     db.user.find((err, shopping) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(shopping);
//         return true;
//     });
// });

// router.post('/', (req, res) => {
//     const userData = req.body;
//     console.log('userData:', userData);
//     if (!userData.username) {
//         res.status(400);
//         res.json({
//             error: 'Invalid data format'
//         });
//     } else {
//         db.user.save(userData, (err, savedData) => {
//             if (err) {
//                 res.send(err);
//             }
//             res.json(savedData);
//         });
//     }
// });
module.exports = router;
