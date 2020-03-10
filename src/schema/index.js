import graphql from 'graphql';
import {GraphQLSchema} from 'graphql';
import RootQuery from './root';
const schema = new GraphQLSchema({
    query: RootQuery
});
export default schema;