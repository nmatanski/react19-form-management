'use client'

import { BellIcon, CheckIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useNotifications } from '../_hooks/providers/useNotifications'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import { useMockNotifications } from '../_hooks/useMockNotifications'

export const Notifications = () => {
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead } = useNotifications()

  useMockNotifications()

  const unreadCount = notifications.filter(notification => !notification.isRead).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <BellIcon className="h-[1.2rem] w-[1.2rem]" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-red-500" />
          )}
          <span className="sr-only">View notifications</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button
              onClick={markAllNotificationsAsRead}
              variant="ghost"
              size="sm"
              className="text-xs">
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {notifications.length === 0 ? (
          <DropdownMenuItem disabled>No notifications</DropdownMenuItem>
        ) : (
          notifications.map(notification => (
            <DropdownMenuItem
              key={notification.id}
              className={`flex flex-col items-start gap-1 group transition bg-transparent ${
                !notification.isRead ? 'bg-muted/30' : ''
              }`}>
              <div className="flex w-full justify-between items-start">
                <div className="flex flex-col">
                  <span
                    className={`text-sm font-medium ${
                      !notification.isRead ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                    {notification.title}
                  </span>
                  {notification.description && (
                    <span className="text-xs text-muted-foreground">
                      {notification.description}
                    </span>
                  )}
                </div>

                {!notification.isRead && (
                  <button
                    className="text-muted-foreground hover:text-foreground transition p-1"
                    onClick={e => {
                      e.stopPropagation()
                      markNotificationAsRead(notification.id)
                    }}>
                    <CheckIcon className="h-4 w-4" />
                  </button>
                )}
              </div>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
