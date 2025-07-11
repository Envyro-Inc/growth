/* eslint-disable */
/* tslint:disable */
// This file is generated. Do not edit it manually.

import { z } from "@botpress/sdk";
export const output = {
  schema: z
    .object({
      userId: z
        .string()
        .title("Botpress user ID")
        .describe("ID of the Botpress user representing the end user"),
    })
    .catchall(z.never()),
};
