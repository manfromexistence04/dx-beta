import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: "agnI51GCGhkPOpIxQdo3Hqkdw3D60OXYIAvBwfan",
});

(async () => {
  const stream = await cohere.chatStream({
    model: "command-r-plus",
    message: "<YOUR MESSAGE HERE>",
    temperature: 0.3,
    chatHistory: [],
    promptTruncation: "AUTO",
    connectors: [{"id":"web-search"}]
  });

  for await (const chat of stream) {
      if (chat.eventType === "text-generation") {
          process.stdout.write(chat.text);
      }
  }
})();