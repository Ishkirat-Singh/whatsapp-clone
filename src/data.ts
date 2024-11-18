import { Chat } from './types';

export const initialChats: Chat[] = [
  {
    id: '1',
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    online: true,
    messages: [
      {
        id: '1',
        text: 'Hey! How are you doing?',
        sender: 'contact',
        timestamp: new Date('2024-03-10T10:00:00'),
      },
      {
        id: '2',
        text: 'Im good, thanks! Just finished that project we talked about.',
        sender: 'user',
        timestamp: new Date('2024-03-10T10:02:00'),
      },
    ],
  },
  {
    id: '2',
    name: 'Tech Team',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    online: false,
    messages: [
      {
        id: '1',
        text: 'Next sprint planning tomorrow at 10 AM',
        sender: 'contact',
        timestamp: new Date('2024-03-10T09:30:00'),
      },
    ],
  },
  {
    id: '3',
    name: 'David Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    online: true,
    messages: [
      {
        id: '1',
        text: 'Did you see the latest updates?',
        sender: 'contact',
        timestamp: new Date('2024-03-09T18:15:00'),
      },
    ],
  },
  {
    id: '4',
    name: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    online: false,
    messages: [
      {
        id: '1',
        text: 'Looking forward to the weekend meetup!',
        sender: 'contact',
        timestamp: new Date('2024-03-09T15:45:00'),
      },
    ],
  },
  {
    id: '5',
    name: 'Family Group',
    avatar: 'https://images.unsplash.com/photo-1511895426328-dc8714191300',
    online: true,
    messages: [
      {
        id: '1',
        text: 'Dont forget Moms birthday next week!',
        sender: 'contact',
        timestamp: new Date('2024-03-09T12:20:00'),
      },
    ],
  },
];