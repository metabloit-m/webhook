import dbConnect from "../../lib/dbConnect";
import User from "../../models/user";

export default async function handler(req, res){

    const {method} = req;
    await dbConnect();

    switch (method){
        case 'POST':
            try{
                const user = User.create(req.body);
                res.status(201).json({success: true});
            }
            catch (e) {
                res.status(400).json({success: false});
            }
            break;
        case 'GET':
            try{
                const users = await User.find({});
                const results = users.map((doc => {
                    const user = doc.toObject()
                    user._id = user._id.toString();
                    return user;
                }))
                res.status(201).json({success: true, data: results})
            }
            catch (e){
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
    }
}