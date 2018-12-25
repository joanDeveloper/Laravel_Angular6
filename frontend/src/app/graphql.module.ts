import { NgModule } from "@angular/core";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";

// Apollo
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

let header: HttpHeaders = new HttpHeaders();
header = header.append("Content-Type", "application/json");

@NgModule({
  exports: [HttpClientModule, ApolloModule, HttpLinkModule]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: "http://localhost:8000/graphql",headers:header }),
      cache: new InMemoryCache()
    });
  }
}