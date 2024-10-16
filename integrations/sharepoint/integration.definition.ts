import { z, IntegrationDefinition } from "@botpress/sdk";
import { integrationName } from "./package.json";
import { configuration } from ".botpress";

export default new IntegrationDefinition({
  name: integrationName,
  version: "0.0.1",
  readme: "hub.md",
  icon: "icon.svg",
  configuration: {
    schema: z.object({
      clientId: z.string().min(1).describe("The client ID"),
      tenantId: z.string().min(1).describe("The tenant ID"),
      thumbprint: z.string().min(1).describe("The thumbprint"),
      privateKey: z.string().min(1).describe("The private key ++ "),
      primaryDomain: z.string().min(1).describe("The primary domain"),
    }),
  },
  states: {
    configuration: {
      type: "integration",
      schema: z.object({
        webhookSubscriptionId: z.string().min(1),
        listId: z.string().min(1),
        changeToken: z.string().min(1),
      }),
    },
  },
  actions: {
    testFunction: {
      title: "Test Function",
      description: "A test function to test a functionality that is in development",
      input: {
        // ui
        schema: z.object({}),
      },
      output: {
        // ui
        schema: z.object({}),
      },
    },
  },
});
