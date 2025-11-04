import { createClient } from "@sanity/client";

let clientInstance: ReturnType<typeof createClient> | null = null;

function getClient() {
  if (clientInstance) {
    return clientInstance;
  }

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

  if (!projectId) {
    // Return a mock client that throws on fetch to provide better error messages
    // This allows the module to load during build even if env vars are missing
    return {
      fetch: () => {
        throw new Error(
          "Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable. Please add it to your Vercel environment variables."
        );
      },
    } as unknown as ReturnType<typeof createClient>;
  }

  clientInstance = createClient({
    projectId,
    dataset,
    apiVersion: "2023-05-03",
    useCdn: true,
  });

  return clientInstance;
}

// Export a lazy singleton client - only created when first accessed
export const client = new Proxy({} as ReturnType<typeof createClient>, {
  get(_target, prop) {
    const actualClient = getClient();
    const value = actualClient[prop as keyof typeof actualClient];
    return typeof value === "function" ? value.bind(actualClient) : value;
  },
});
