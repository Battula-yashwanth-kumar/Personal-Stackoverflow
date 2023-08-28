import Users from "../models/User.js";

class UserControls {
    static addError = async (req, res) => {
        try {
            const { name, error, solution } = req.body;
            const user = new Users(req.body);
            const result = await user.save();
            res.status(201).json({ success: true, user: result });
        } catch (error) {
            console.log(error);
            res.status(400).json({ success: false, message: error.message + "hello" });
        }
    }
}

export default UserControls;
