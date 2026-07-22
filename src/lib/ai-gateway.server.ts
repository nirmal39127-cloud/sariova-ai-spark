import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

/**
 * Google Gemini via its OpenAI-compatible endpoint.
 *
 * Replaces the Lovable AI Gateway, which only works while the app is
 * hosted on Lovable. This app is self-hosted on Cloudflare Workers,
 * so it calls Google directly with our own API key.
 *
 * Key comes from https://aistudio.google.com  (starts with "AIza...")
 */
export function createGoogleAiProvider(googleApiKey: string) {
  return createOpenAICompatible({
    name: "google",
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai",
    headers: {
      Authorization: `Bearer ${googleApiKey}`,
    },
  });
}
