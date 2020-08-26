import {ApolloClient, InMemoryCache} from "@apollo/client";

const uri: string = "https://rickandmortyapi.com/graphql/";

export const client: ApolloClient<any> = new ApolloClient({
    uri,
    cache: new InMemoryCache()
});