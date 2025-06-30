import { StyleProp, ViewStyle } from 'react-native';

export interface HomeScreenProps extends SearchHistoryProps {}
export interface SearchHistoryProps {
  searchHistory: string;
}

export interface PromoCardProps {
  title: string;
  image: string;
  promo?: boolean;
}

export interface HomeAdsProps {
  homeAdsTitle: string;
  homeAdsImage: string;
  homeAdsButton: string;
  homeAdsStyle?: StyleProp<ViewStyle>;
}
