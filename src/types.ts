export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'contact';
  timestamp: Date;
}

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage?: Message;
  messages: Message[];
  online: boolean;
}