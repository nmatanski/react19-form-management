import { NotificationsContext } from "@/app/_providers/NotificationsProvider";
import { use } from "react";

export const useNotifications = () => {
  const context = use(NotificationsContext);

  if (!context) {
    throw new Error("ThemeSwitcher must be used within a ThemeProvider");
  }

  return context;
};
