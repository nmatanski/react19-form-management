import { Notification } from '../_types/Notification.type'

export const getNotifications = (): Promise<Notification[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: '0',
          title: 'Notification 1',
          description: 'This is Notification 1.',
          isRead: false
        },
        {
          id: '1',
          title: 'Notification 2',
          description: 'This is Notification 2.',
          isRead: false
        },
        {
          id: '2',
          title: 'Notification 3',
          description: 'This is Notification 3.',
          isRead: false
        },
        {
          id: '3',
          title: 'Notification 4',
          description: 'This is Notification 4.',
          isRead: false
        },
        {
          id: '4',
          title: 'Notification 5',
          description: 'This is Notification 5.',
          isRead: true
        },
        {
          id: '5',
          title: 'Notification 6',
          description: 'This is Notification 6.',
          isRead: true
        },
        {
          id: '6',
          title: 'Notification 7',
          description: 'This is Notification 7.',
          isRead: true
        },
        {
          id: '7',
          title: 'Notification 8',
          description: 'This is Notification 8.',
          isRead: true
        },
        {
          id: '8',
          title: 'Notification 9',
          description: 'This is Notification 9.',
          isRead: true
        },
        {
          id: '9',
          title: 'Notification 10',
          description: 'This is Notification 10.',
          isRead: true
        }
      ])
    }, 2000)
  })
}
