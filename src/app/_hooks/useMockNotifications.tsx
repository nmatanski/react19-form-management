import { useEffect, useRef } from 'react';
import { useNotifications } from './providers/useNotifications';
import { Notification } from '../_types/Notification.type';

// Simulate fetch with delay
const getMockInitialNotifications = async (): Promise<Notification[]> => {
  await new Promise(res => setTimeout(res, 2000));
  return Array.from({ length: 10 }, (_, i) => ({
    id: `notification-${i + 1}`,
    title: `Notification ${i + 1}`,
    description: `This is message ${i + 1}`,
    isRead: i < 4 ? false : true
  }));
};

const generateNotification = (): Notification => ({
  id: crypto.randomUUID(),
  title: `New Notification`,
  description: `This is an auto-generated message`,
  isRead: false
});

export const useMockNotifications = () => {
  const isInitialized = useRef(false);
  const { addNotification, setInitialNotifications } = useNotifications();

  useEffect(() => {
    const fetchInitial = async () => {
      if (!isInitialized.current) {
        const notifications = await getMockInitialNotifications();
        setInitialNotifications(notifications);
        isInitialized.current = true;
      }
    };
    fetchInitial();
  }, [setInitialNotifications]);

  useEffect(() => {
    const interval = setInterval(() => {
      addNotification(generateNotification());
    }, 5000);

    return () => clearInterval(interval);
  }, [addNotification]);
};
