import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const useFirebaseAuth = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(authUser => {
      setUser(authUser);
      setLoading(false);
    });

    return unsubscribe; // Clean up subscription
  }, []);

  const signOut = async () => {
    try {
      await auth().signOut();
      return { success: true };
    } catch (error) {
      console.error('Sign out error:', error);
      return {
        success: false,
        error: (error as any).message,
      };
    }
  };

  const deleteAccount = async () => {
    try {
      if (user) {
        await user.delete();
        return { success: true };
      }
      return {
        success: false,
        error: 'No user found',
      };
    } catch (error) {
      console.error('Delete account error:', error);
      return {
        success: false,
        error: (error as any).message,
      };
    }
  };

  return {
    user,
    loading,
    signOut,
    deleteAccount,
    isAuthenticated: !!user,
  };
};
