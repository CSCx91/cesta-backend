import graphql from 'graphql';
import {GraphQLSchema} from 'graphql';
import RootQuery from './root';
import Mutation from './mutation';
const schema = new GraphQLSchema({
    query: RootQuery,
    mutation:Mutation
});
export default schema;