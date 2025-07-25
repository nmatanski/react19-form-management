'use client';

import { createContext, PropsWithChildren, useState } from 'react';
import { Notification } from '../_types/Notification.type';

type NotificationsContextProps = {
  notifications: Notification[];
  setInitialNotifications: (notifications: Notification[]) => void;
  addNotification: (notification: Notification) => void;
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
};

export const NotificationsContext = createContext<NotificationsContextProps | null>(null);

export const NotificationsProvider = ({ children }: PropsWithChildren) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const sortNotifications = (notifications: Notification[]) =>
    [...notifications].sort((a, b) => Number(a.isRead) - Number(b.isRead));

  const setInitialNotifications = (initial: Notification[]) =>
    setNotifications(sortNotifications(initial));

  const addNotification = (notification: Notification) =>
    setNotifications(prev => [notification, ...prev]);

  const markNotificationAsRead = (id: string) =>
    setNotifications(prev =>
      sortNotifications(prev.map(n => (n.id === id ? { ...n, isRead: true } : n)))
    );

  const markAllNotificationsAsRead = () =>
    setNotifications(prev =>
      sortNotifications(prev.map(n => (n.isRead ? n : { ...n, isRead: true })))
    );

  return (
    <NotificationsContext
      value={{
        notifications,
        setInitialNotifications,
        addNotification,
        markNotificationAsRead,
        markAllNotificationsAsRead
      }}>
      {children}
    </NotificationsContext>
  );
};
