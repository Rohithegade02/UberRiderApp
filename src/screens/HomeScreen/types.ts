export interface HomeScreenProps extends SearchHistoryProps {}
export interface SearchHistoryProps {
  searchHistory: string;
}

export interface PromoCardProps {
  title: string;
  image: string;
  promo?: boolean;
}
