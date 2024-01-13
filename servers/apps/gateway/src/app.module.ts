import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import {

  ApolloGatewayDriver,
  ApolloGatewayDriverConfig,
} from "@nestjs/apollo";
import { IntrospectAndCompose, RemoteGraphQLDataSource } from "@apollo/gateway";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        context: async ({ req }) => {
          return req;
        },
      },
      gateway: {
        buildService({name, url}) {
          return new RemoteGraphQLDataSource({
            url,
            willSendRequest({request, context}) {
              request.http.headers.set('accesstoken', context.headers ? context.headers?.accesstoken: null)
              request.http.headers.set('refreshtoken', context.headers ? context.headers?.refreshtoken: null)
            }
          })
        },
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: "users",
              url: "http://localhost:4001/graphql",
            },
            {
              name: "profile",
              url: "http://localhost:4002/graphql",
            },
          ],
        }),
      },
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
