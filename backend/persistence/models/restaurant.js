import mongoose from "mongoose";

/**
 * create the mongoose model corresponding to the Restaurant collection in MongoDB
 * mongoose allows specifying a schema and field validators
 * while data were validated in the controller, it is good practice to verify assumptions at every level to maintain integrity
 */
const Restaurant = mongoose.model("Restaurant", new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        id: {
            type: String
        },
        type: {
            type: String
        },
        description: {
            type: String
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            validate: {
                validator: Number.isInteger
            }
        },
        groups: {
            type:String
        }
    }
));

export default Restaurant;
