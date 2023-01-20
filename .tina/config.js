import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "4fa7de6e-3c9c-4c57-a2ec-3397f690416f", // Get this from tina.io
  token: "5745ce7a9de6960cf1746a9bb458804153fafdcc", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "assets",
    },
  },
  schema: {
    collections: [
      {
        label: "posts",
        name: "post",
        path: '_posts',
        fields: [
          {
            type: "string",
            label: "Layout",
            name: "layout"
          }
        ]
      }
    ],
  },
});
