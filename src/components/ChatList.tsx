import React from 'react';
import { MessageSquare, MoreVertical, Search, Users } from 'lucide-react';
import { Chat } from '../types';

interface ChatListProps {
  chats: Chat[];
  selectedChat: Chat | null;
  onSelectChat: (chat: Chat) => void;
}

export function ChatList({ chats, selectedChat, onSelectChat }: ChatListProps) {
  return (
    <div className="w-full md:w-[380px] h-full flex flex-col border-r border-gray-200">
      <div className="p-4 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex items-center space-x-4 text-gray-600">
          <Users className="w-5 h-5" />
          <MessageSquare className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </div>
      
      <div className="px-3 py-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full py-2 px-4 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <Search className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={`flex items-center px-3 py-3 cursor-pointer hover:bg-gray-50 ${
              selectedChat?.id === chat.id ? 'bg-gray-100' : ''
            }`}
          >
            <div className="relative flex-shrink-0">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800 truncate">{chat.name}</h3>
                <span className="text-xs text-gray-500 flex-shrink-0">
                  {chat.messages[chat.messages.length - 1]?.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
              <p className="text-sm text-gray-600 truncate">
                {chat.messages[chat.messages.length - 1]?.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}