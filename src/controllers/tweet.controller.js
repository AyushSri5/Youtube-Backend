import mongoose, { isValidObjectId } from "mongoose"
import {Tweet} from "../models/tweet.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createTweet = asyncHandler(async (req, res) => {
    //TODO: create tweet
    const { content } =req.body;

    if(!content){
        throw new ApiError(404,"Content for tweet is required");
    }

    const tweet = await Tweet.create({
        content:content,
        owner:req?.user?._id
    },
    {timestamps:true}
    );

    if (!tweet) {
        throw new ApiError(500, "failed to create tweet please try again");
    }
    

    return res
    .status(200)
    .json(
        new ApiResponse(200, tweet, "Tweet created successfully")
        );

})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets

    const { userId } = req.params;

    await Tweet.aggregate(
        {
            $match: 
        },
        {},
        {}
    )
})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}