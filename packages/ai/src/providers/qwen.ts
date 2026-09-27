import { openAICompletionsApi } from "../api/openai-completions.lazy.ts";
import { envApiKeyAuth } from "../auth/helpers.ts";
import { createProvider, type Provider } from "../models.ts";
import { QWEN_MODELS } from "./qwen.models.ts";

export function qwenProvider(): Provider<"openai-completions"> {
	return createProvider<"openai-completions">({
		id: "qwen",
		name: "Qwen",
		auth: { apiKey: envApiKeyAuth("Qwen API key", ["QWEN_API_KEY"]) },
		models: [...Object.values(QWEN_MODELS)],
		api: openAICompletionsApi(),
	});
}
