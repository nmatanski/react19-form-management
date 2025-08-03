'use server';

import { Notification } from '../_types/Notification.type';

export const getNotifications = async (): Promise<Notification[]> => {
  await new Promise(res => setTimeout(res, 2000));
  return Array.from({ length: 10 }, (_, i) => ({
    id: `notification-${i + 1}`,
    title: `Notification ${i + 1}`,
    description: `This is message ${i + 1}`,
    isRead: i < 4 ? false : true
  }));
};

export const getNewNotification = async (): Promise<Notification> => {
  await new Promise(res => setTimeout(res, 5000));
  return {
    id: crypto.randomUUID(),
    title: `New Notification`,
    description: `This is an auto-generated message`,
    isRead: false
  };
};
