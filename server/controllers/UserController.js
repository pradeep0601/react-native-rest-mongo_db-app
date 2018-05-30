//grab the User model
import User from '../models/user';

//define crud operation

// Create and Save a new user

const create = (req, res) => {
    const inputData = req.body;
    if (!inputData.username) {
        return res.status(400).send({
            message: 'Invalid data format'
        });
    }
    console.log(inputData);
    // create an user
    const userData = new User(inputData);

    //save the user into database
    userData.save()
    .then(data => {
        console.log(data);
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error occured while saving user'
        });
    });
};

const findAllUser = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'error occured while retrieving the user data'
        });
    });
};

const updateUser = (req, res) => {
    const inputData = req.body;
    console.log(`updateUser: inputData: ${JSON.stringify(inputData)}`);
    // Validate Request
    if (!inputData) {
        return res.status(400).send({
            message: 'empty data'
        });
    }
    // find user and update
    User.findByIdAndUpdate(inputData._id, inputData, { new: true })
    .then(updatedUser => {
        if (!updatedUser) {
            return res.status(404).send({
                message: `User with id: ${inputData._id}, not found!`
            }); 
        }
        res.send(updatedUser);
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: `User with _id: ${inputData._id}, doesn't exist`
            });
        }
        return res.status(500).send({
            message: `Error while updating user data with id: ${inputData._id}`
        });
    });
};

 const deleteUser = (req, res) => {
     const inputData = req.body;
     console.log(`deleteUser: inputData: ${JSON.stringify(inputData)}`);
     //validate input data
     if (!inputData) {
         return res.status(404).send({
             message: 'empty data'
         });
     }
     // find the user by id and delete it
     User.findByIdAndRemove(inputData._id)
     .then(user => {
         if (!user) {
             return res.status(404).send({
                 message: `User with id: ${inputData._id}, not found!`
             });
         }
         res.send({
            message: `User with username: ${inputData.userName}, got deleted successfully`
        });
     })
     .catch(err => {
         res.status(500).send({
            message: `Error: ${err}, while deleting user data with id: ${inputData._id}`
         });
     });
 };
module.exports = {
    create,
    findAllUser,
    updateUser,
    deleteUser
};
