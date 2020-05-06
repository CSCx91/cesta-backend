import graphql, { GraphQLBoolean, GraphQLList } from 'graphql';
import {GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLInt} from 'graphql';
import { GraphQLDate } from 'graphql-compose';
import ItemType from './item';
import UserType from './user';
import CommentType from './comment';
import {Item, User, Comment} from '../models';
const PostType = new GraphQLObjectType({
    name:'Post',
    fields:()=>({
        id:{type:GraphQLString},
        view: {type:GraphQLInt},
        date_of_post: {type:GraphQLDate},
        expire_date: {type:GraphQLDate},
        post_type: {type: GraphQLBoolean},
        item:{
            type: ItemType,
            resolve(parent,args){
                return Item.findById(parent.itemId);
            }
        },//
        poster:{
            type: UserType,
            resolve(parent,args){
                return User.findById(parent.posterId);
            }
        },//
        comments:{
            type: new GraphQLList(CommentType),
            resolve(parent,args){
                return parent.commendIds.map(id=> Comment.findById(id));
            }
        },//
        idDone:{type: GraphQLBoolean}
    })
});
export default PostType;