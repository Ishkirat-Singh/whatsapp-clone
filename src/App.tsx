import React, { useState } from 'react';
import { ChatList } from './components/ChatList';
import { ChatWindow } from './components/ChatWindow';
import { initialChats } from './data';
import { Chat, Message } from './types';

function App() {
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  const handleSendMessage = (chatId: string, text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      )
    );
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="h-16 bg-[#00a884] w-full"></div>
      <div className="flex-1 flex bg-[#f0f2f5] overflow-hidden">
        <div className="container mx-auto flex flex-1 shadow-lg bg-white max-w-7xl">
          <ChatList
            chats={chats}
            selectedChat={selectedChat}
            onSelectChat={setSelectedChat}
          />
          <ChatWindow chat={selectedChat} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;