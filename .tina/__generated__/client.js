import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'c8f8b48680ac4ae61aab30aadc9ccfd476a705cc', queries });
export default client;
  