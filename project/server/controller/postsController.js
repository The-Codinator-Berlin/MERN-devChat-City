import postsModel from "../models/postsModel.js";

const getAllPosts = async (request, response) => {

    try {
        const allPosts = await postsModel.find({});
        response.status(200).json({
            allPosts,
            number: allPosts.length,
            operationSuccess: "You are seeing a display of all the posts in devChat-City"
        })
        console.log('Successfully fetched, status 200 :>> ', response);

    } catch (error) {
        response.status(500).json({
            errorMessage: "There was a error when trying trying to fetch this data!"
        })
        console.log('Error status 500, could not fetch data :>> ', error);
    }
}

const getPostsByCodingLanguage = async (request, response) => {
    const codingLanguage = request.params.codingLanguage

    try {
        const requestedPostsByCodingLanguage = await postsModel.find({
            codingLanguage: request.params.codingLanguage,
        })
        console.log('requestedPostsByCodingLanguage :>>>>>>>> ', requestedPostsByCodingLanguage);

        response.status(200).json({
            requestedPostsByCodingLanguage,
            number: requestedPostsByCodingLanguage.length,
            operationSuccess: "You are seeing a display of posts with the coding language that you have filtered by"
        })
    } catch (error) {
        response.status(500).json({
            errorMessage: "There was a error when trying trying to fetch this data!"
        })
        console.log('Error status 500, could not fetch data :>> ', error);
    }
};

export { getAllPosts, getPostsByCodingLanguage };