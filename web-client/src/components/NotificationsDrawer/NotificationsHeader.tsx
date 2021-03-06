import React from 'react';
import { useTranslation } from 'react-i18next';

import { COLORS } from '../../theme/colors';

interface NotificationsHeaderProps {
  numNotifications?: number;
  isCav?: boolean;
}

const NotificationsHeader: React.FC<NotificationsHeaderProps> = ({
  numNotifications = 0,
  isCav,
}): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        margin: '25px',
        marginBottom: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <h1
        style={{
          color: 'rgba(0, 0, 0, 0.65)',
          fontSize: '30px',
        }}
      >
        <b> {t('components.notification.notifications')} </b>
      </h1>
      <h2
        style={{
          backgroundColor: isCav ? COLORS.primaryDark : COLORS.brandOrange,
          color: '#FFFFFF',
          paddingLeft: '10px',
          paddingRight: '10px',
          marginTop: '10px',
          marginBottom: '17px',
          borderRadius: '5px',
        }}
      >
        {numNotifications}
      </h2>
    </div>
  );
};
export default NotificationsHeader;
