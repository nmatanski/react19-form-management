import { useEffect, useRef } from 'react';
import { useNotifications } from './providers/useNotifications';
import { getNewNotification, getNotifications } from '../_services/notificationService';

export const useMockNotifications = () => {
  const isInitialized = useRef(false);
  const { addNotification, setInitialNotifications } = useNotifications();

  useEffect(() => {
    const fetchInitial = async () => {
      if (!isInitialized.current) {
        const notifications = await getNotifications();
        setInitialNotifications(notifications);
        isInitialized.current = true;
      }
    };
    fetchInitial();
  }, [setInitialNotifications]);

  useEffect(() => {
    const fetchNewNotification = async () => {
      addNotification(await getNewNotification());
    };
    fetchNewNotification();
  }, [addNotification]);
};
