'use client'
import React from "react";
import { ApolloProvider } from '@apollo/client'
import { graphqlClient } from "@/shared/graphql/gql.setup";
import { TooltipProvider } from "@/shared/components/ui/tooltip";

interface IApolloProvider extends React.HTMLAttributes<HTMLDivElement>{}

const ApolloProviderClient = ({children}: IApolloProvider) => {
  return (
    <ApolloProvider client={graphqlClient}>
      <TooltipProvider>
          {children}
      </TooltipProvider>
    </ApolloProvider>
  );
};
export default ApolloProviderClient;
