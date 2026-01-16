'use client';

import { ChatWidget } from "@papercups-io/chat-widget";

export default function ChatWidgetWrapper() {
  return (
    <ChatWidget
      token="2a33ce6d-53fb-4c25-b9f6-3978ea9aedd5"
      accountId="2a33ce6d-53fb-4c25-b9f6-3978ea9aedd5"
      baseUrl="https://papercups-latest-yob9.onrender.com"
      title="Welcome to Crafted by Louisse"
      subtitle="Ask us anything about our flowers! 💐"
      primaryColor="#f78da7"
      greeting="Hi there! How can we help you today?"
      newMessagePlaceholder="Start typing..."
      showAgentAvailability={false}
      requireEmailUpfront={false}
    />
  );
}