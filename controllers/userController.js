const {User, Thought, Reaction} = require('../models');

module.exports = {
    getUsers(req,res)  {
        User.find()
        .then(async(users)=> {
            const usersObj = {
                users,
                headCount: await headCount(),
            };
            return res.json(usersObj);
        })
        .catch((err)=> {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    
}