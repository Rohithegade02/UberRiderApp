import firestore from '@react-native-firebase/firestore';

export const saveRideDetails = async (rideDetails: any) => {
  try {
    console.log('Ride details:', rideDetails);
    const res = await firestore().collection('rides').add(rideDetails);
    console.log('Ride saved with ID:', res.id);
    return { success: true };
  } catch (error) {
    console.error('Error saving ride:', error);
    return { success: false, error };
  }
};

export const getAllRides = async () => {
  try {
    const snapshot = await firestore().collection('rides').get();
    const rides = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { success: true, rides };
  } catch (error) {
    console.error('Error fetching rides:', error);
    return { success: false, error };
  }
};
