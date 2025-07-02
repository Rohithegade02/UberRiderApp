import { useMemo } from 'react';

interface ArrivalTimeResult {
  formattedTime: string;
  formattedDuration: string;
}

export const useArrivalTime = (
  durationInMinutes?: string | number,
): ArrivalTimeResult => {
  return useMemo(() => {
    try {
      // Handle undefined or null duration
      if (durationInMinutes === undefined || durationInMinutes === null) {
        return {
          formattedTime: 'Calculating...',
          formattedDuration: '',
        };
      }

      // Convert duration to number
      const minutes =
        typeof durationInMinutes === 'string'
          ? parseInt(durationInMinutes, 10)
          : durationInMinutes;

      // Handle invalid duration
      if (isNaN(minutes) || minutes <= 0) {
        return {
          formattedTime: 'Invalid time',
          formattedDuration: '',
        };
      }

      // Calculate arrival time
      const now = new Date();
      const arrivalTime = new Date(now.getTime() + minutes * 60 * 1000);

      // Format arrival time (e.g., "2:30 pm")
      const formattedTime = arrivalTime
        .toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
        .toLowerCase();

      // Format duration (e.g., "10 min" or "1 hr 30 min")
      let formattedDuration = '';
      if (minutes < 60) {
        formattedDuration = `${minutes} min`;
      } else {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        formattedDuration = `${hours} hr${hours > 1 ? 's' : ''}${
          remainingMinutes > 0 ? ` ${remainingMinutes} min` : ''
        }`;
      }

      return {
        formattedTime: `Arrives by ${formattedTime}`,
        formattedDuration,
      };
    } catch (error) {
      console.error('Error calculating arrival time:', error);
      return {
        formattedTime: 'Invalid time',
        formattedDuration: '',
      };
    }
  }, [durationInMinutes]);
};
