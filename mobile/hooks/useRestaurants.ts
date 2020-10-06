import { useEffect, useState } from 'react';
import { getAllRestaurants } from '../firestore/index';

interface Restaurant {
  id: string;
  title: string;
}

export function useRestaurants() {
  const [restaurants, setrestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    let unsubscribe: (() => void) | null | undefined = null;

    // Subscribeing to restaurants collection
    unsubscribe = getAllRestaurants()?.onSnapshot((snapshot) => {
      const restaurantList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Restaurant[];
      setrestaurants(restaurantList);
    });

    // make sure to clean up and unsubscribe
    return () => {
      unsubscribe?.();
    };
  }, []);

  return restaurants;
}
