export const formatTime = (timestamp: any) => {
  return timestamp
    ? new Date(
        timestamp.seconds ? timestamp.seconds * 1000 : timestamp,
      ).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';
};
