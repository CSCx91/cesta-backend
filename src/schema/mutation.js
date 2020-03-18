import graphql from 'graphql';
import {GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLBoolean} from 'graphql';
import UserType from './user';
import ItemType from './item';
import OrderType from './order';
import PostType from './post';
import CommentType from './comment';
import {User, Comment, Item, Order, Post} from '../models';
const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addItem:{
            type: ItemType,
            args:{
                title:{type:GraphQLString},
                condition:{type: GraphQLString},
                price:{type:GraphQLInt},
                description:{type: GraphQLString},
                pictures:{type:GraphQLList(GraphQLString)},
                category:{type:GraphQLList(GraphQLString)},
                negotiable:{type:GraphQLBoolean}
            },
            resolve(parent,args){
                let item=new Item({
                    title: args.title,
                    condition: args.condition,
                    description: args.description,
                    price: args.price,
                    pictures: args.pictures,
                    category: args.category,
                    negotiable: args.negotiable
                });
                return item.save();
            }
        }
    }
});

export default Mutation;
