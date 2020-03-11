import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

interface Definition {
  kind: string;
  operation?: string;
}

@NgModule({
  declarations: [],
  exports: [HttpClientModule, ApolloModule, HttpLinkModule]
})
export class GraphqlModule {
  constructor(apollo: Apollo, httpClient: HttpClient) {
    const httpLink = new HttpLink(httpClient).create({
      uri: "http://localhost:5002/graphql"
    });

    const subscriptionLink = new WebSocketLink({
      uri: "ws://localhost:5002/graphql",
      options: {
        reconnect: true
      }
    });

    const link = split(
      ({ query }) => {
        const { kind, operation }: Definition = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      subscriptionLink,
      httpLink
    );

    apollo.create({
      link,
      cache: new InMemoryCache()
    });
  }
}
