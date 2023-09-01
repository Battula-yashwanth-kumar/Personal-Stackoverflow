import Users from "../models/User.js";

class UserControls {
    static addError = async (req, res) => {

        try {
            const { Name, Error, Solution } = req.body;
        
            const newUser = new Users({
              Name,
              Error,
              Solution,
            });
        
            await newUser.save();
        
            res.status(201).json({ message: 'User added successfully' });
          } catch (error) {
            res.status(400).json({ message: 'Error adding user', error });
          }
        };
        
        
        
        
        
        
        
    }


export default UserControls;
