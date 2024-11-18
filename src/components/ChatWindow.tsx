import React, { useState } from 'react';
import { Phone, Video, MoreVertical, Smile, Paperclip, Send } from 'lucide-react';
import { Chat, Message } from '../types';

interface ChatWindowProps {
  chat: Chat | null;
  onSendMessage: (chatId: string, message: string) => void;
}

export function ChatWindow({ chat, onSendMessage }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-600">Welcome to WhatsApp</h3>
          <p className="text-gray-500 mt-2">Select a chat to start messaging</p>
        </div>
      </div>
    );
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(chat.id, newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 bg-gray-50 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{chat.name}</h3>
            <p className="text-sm text-gray-600">
              {chat.online ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-600">
          <Video className="w-5 h-5" />
          <Phone className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#e5ded8]">
        {chat.messages.map((message: Message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-green-100'
                  : 'bg-white'
              }`}
            >
              <p className="text-gray-800">{message.text}</p>
              <p className="text-xs text-gray-500 text-right mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="p-4 bg-gray-50 flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Smile className="w-6 h-6" />
          <Paperclip className="w-6 h-6" />
        </div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 py-2 px-4 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <button
          type="submit"
          className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}