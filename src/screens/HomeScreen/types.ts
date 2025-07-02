import { StyleProp, ViewStyle } from 'react-native';

export interface HomeScreenProps extends SearchHistoryProps {
  handleWhereTo: () => void;
  loading?: boolean;
}
export interface SearchHistoryProps {
  searchHistory?: string;
  loading?: boolean;
}

export interface PromoCardProps {
  title: string;
  image: string;
  promo?: boolean;
  loading?: boolean;
}

export interface HomeAdsProps {
  homeAdsTitle: string;
  homeAdsImage: string;
  homeAdsButton: string;
  loading?: boolean;
  homeAdsStyle?: StyleProp<ViewStyle>;
}
