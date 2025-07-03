import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = () => {
  const [storageLoading, setStorageLoading] = useState(false);
  const [storageError, setStorageError] = useState<Error | null>(null);

  const getItem = async <T>(key: string): Promise<T | null> => {
    setStorageLoading(true);
    setStorageError(null);
    try {
      const value = await AsyncStorage.getItem(key);
      const parsedValue = value ? (JSON.parse(value) as T) : null;
      setStorageLoading(false);
      return parsedValue;
    } catch (error) {
      setStorageError(error as Error);
      setStorageLoading(false);
      return null;
    }
  };

  const setItem = async <T>(key: string, value: T): Promise<void> => {
    setStorageLoading(true);
    setStorageError(null);
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      setStorageLoading(false);
    } catch (error) {
      setStorageError(error as Error);
      setStorageLoading(false);
    }
  };

  const removeItem = async (key: string): Promise<void> => {
    setStorageLoading(true);
    setStorageError(null);
    try {
      await AsyncStorage.removeItem(key);
      setStorageLoading(false);
    } catch (error) {
      setStorageError(error as Error);
      setStorageLoading(false);
    }
  };

  const clear = async (): Promise<void> => {
    setStorageLoading(true);
    setStorageError(null);
    try {
      await AsyncStorage.clear();
      setStorageLoading(false);
    } catch (error) {
      setStorageError(error as Error);
      setStorageLoading(false);
    }
  };

  return {
    storageLoading,
    storageError,
    getItem,
    setItem,
    removeItem,
    clear,
  };
};
