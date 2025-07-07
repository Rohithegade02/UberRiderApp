import { ROUTE_API } from '../api';

// Fetch autocomplete predictions
export const fetchAutocomplete = async (input: string) => {
  console.log(process.env.GOOGLE_MAPS_API_KEY);
  try {
    const response = await fetch(
      `${ROUTE_API.autocomplete}?input=${input}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Fetch place details
export const fetchPlaceDetails = async (placeId: string) => {
  try {
    const response = await fetch(
      `${ROUTE_API.details}?place_id=${placeId}&key=${process.env.GOOGLE_MAPS_API_KEY}&fields=geometry`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Fetch geocode
export const fetchGeocode = async (latitude: number, longitude: number) => {
  try {
    const response = await fetch(
      `${ROUTE_API.geocode}?latlng=${latitude},${longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Fetch directions
export const fetchDirections = async (
  origin: { latitude: number; longitude: number },
  destination: { latitude: number; longitude: number },
) => {
  try {
    const response = await fetch(
      `${ROUTE_API.directions}?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Fetch distance matrix
export const fetchDistanceMatrix = async (
  origin: { latitude: number; longitude: number },
  destination: { latitude: number; longitude: number },
) => {
  try {
    const response = await fetch(
      `${ROUTE_API.distanceMatrix}?origins=${origin.latitude},${origin.longitude}` +
        `&destinations=${destination.latitude},${destination.longitude}` +
        `&key=${process.env.GOOGLE_MAPS_API_KEY}&units=metric`,
    );

    const data = await response.json();

    if (data.status === 'OK' && data.rows[0].elements[0].status === 'OK') {
      return {
        distance: data.rows[0].elements[0].distance,
        duration: data.rows[0].elements[0].duration,
      };
    }

    throw new Error(data.error_message || 'Failed to calculate distance');
  } catch (error) {
    console.error('Error in fetchDistanceMatrix:', error);
    throw error;
  }
};

export async function getPlaceDetailsFromLatLng(
  latitude: number,
  longitude: number,
): Promise<string> {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
    );
    const results = (await response.json()).results;
    if (results && results.length > 0) {
      return results[0].formatted_address;
    }
    return 'Unknown location';
  } catch (error) {
    console.error('Error fetching place details:', error);
    return 'Unknown location';
  }
}
