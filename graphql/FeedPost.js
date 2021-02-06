const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require("graphql")
const User = require("./User")

const FeedPost = new GraphQLObjectType({
    name: "FeedPost",
    description: "This represents a post to a user's feed",
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(feedpost) {
                    return feedpost.id;
                }
            },
            content: {
                type: GraphQLString,
                resolve(feedpost) {
                    return feedpost.content;
                }
            },
            type: {
                type: GraphQLString,
                resolve(feedpost) {
                    return feedpost.type;
                }
            },
            createdAt: {
                type: GraphQLString,
                resolve(feedpost) {
                    return feedpost.createdAt;
                }
            },
            user: {
                type: User,
                resolve(feedpost) {
                    return feedpost.getUser();
                }
            }
        }
    }
})

module.exports = FeedPost;