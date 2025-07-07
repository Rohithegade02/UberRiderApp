import { StyleProp, ViewStyle } from 'react-native';

// Home Screen Props
export interface HomeScreenProps extends SearchHistoryProps {
  handleWhereTo: () => void;
  loading?: boolean;
  handleSeeAll?: () => void;
  promoCardData?: PromoCardProps[];
  homeAdsData?: HomeAdsProps[];
}

// Search History Props
export interface SearchHistoryProps {
  searchHistory?: string;
  loading?: boolean;
  handleSeeAll?: () => void;
  promoCardData?: PromoCardProps[];
}

// Promo Card Props
export interface PromoCardProps {
  title: string;
  image: string;
  promo?: boolean;
  loading?: boolean;
}

// Home Ads Props
export interface HomeAdsProps {
  homeAdsTitle?: string;
  homeAdsImage?: string;
  homeAdsButton?: string;
  loading?: boolean;
  homeAdsStyle?: StyleProp<ViewStyle>;
}

// Home Ads Item Props
export interface HomeAdsItemProps {
  homeAdsData: HomeAdsProps[];
}
