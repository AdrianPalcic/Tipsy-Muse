import { createClient } from "@sanity/client";

function getClient() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

  if (!projectId) {
    throw new Error(
      "Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable. Please add it to your Vercel environment variables."
    );
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: "2023-05-03",
    useCdn: true,
  });
}

// Export a singleton client instance
export const client = getClient();
