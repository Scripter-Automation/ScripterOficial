import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://seraing.stepzen.net/api/Scripter/__graphql",
    headers:{
        Authorization:`Apikey seraing::stepzen.net+1000::c14cce0a39cb4b28f9410ca9b5eeb3bbbc754dc62b5172911ef668ffd94b086a`
    },
    cache: new InMemoryCache(),
});

//${process.env.NEXT_PUBLIC_STEPZEN_KEY}

export default client;