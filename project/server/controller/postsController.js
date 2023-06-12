import postsModel from "../models/postsModel.js";

const getAllPosts = async (request, response) => {

    try {
        const allPosts = await postsModel.find({}).populate({ path: "userWhoPosted", select: "userId" });;
        response.status(200).json({
            allPosts,
            number: allPosts.length,
            operationSuccess: "You are seeing a display of all the posts in devChat-City"
        });
        console.log('Successfully fetched, status 200 :>> ', response);

    } catch (error) {
        response.status(500).json({
            errorMessage: "There was a error when trying trying to fetch this data!"
        })
        console.log('Error status 500, could not fetch data :>> ', error);
    };
};

const getPostsByCodingLanguage = async (request, response) => {
    try {
        const requestedPostsByCodingLanguage = await postsModel.find({
            codingLanguage: request.params.codingLanguage,
        });
        console.log('requestedPostsByCodingLanguage :>>>>>>>> ', requestedPostsByCodingLanguage);
        if (requestedPostsByCodingLanguage.length === 0) {
            response.status(201).json({
                message: "Sorry there are no posts matching the coding language you are looking for!",
            });
        } else {
            response.status(200).json({
                requestedPostsByCodingLanguage,
                number: requestedPostsByCodingLanguage.length,
            });
        };
    } catch (error) {
        response.status(500).json({
            errorMessage: "There was a error when trying trying to fetch this data!"
        });
        console.log('Error status 500, could not fetch data :>> ', error);
    };
};

export { getAllPosts, getPostsByCodingLanguage };