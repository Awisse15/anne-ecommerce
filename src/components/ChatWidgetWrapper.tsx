'use client';

import { ChatWidget } from "@papercups-io/chat-widget";

export default function ChatWidgetWrapper() {
  return (
    <ChatWidget
      token="2a33ce6d-53fb-4c25-b9f6-3978ea9aedd5"
      inbox="cbcad038-825f-4da5-a2d4-4f7740063589"
      title="Welcome to Crafted by Louisse"
      subtitle="Ask us anything about our flowers! 💐"
      primaryColor="#f78da7"
      baseUrl="https://papercups-latest-yob9.onrender.com"
      showAgentAvailability={false}
      requireEmailUpfront={false}
    />
  );
}