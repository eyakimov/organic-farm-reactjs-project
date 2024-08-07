import { useNotificationContext } from '../../contexts/NotificationContextProvider';

export default function Notification() {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    return (
        <div className={`alert ${notification.type}`} role="alert">
            {notification.message}
        </div>

    );
};