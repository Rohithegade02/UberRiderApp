export interface ServicePromoCardProps {
  title: string;
  image: string;
  promo?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

export interface ServiceScreenProps {
  handleVehicleType: (vehicleType: string) => void;
  servicePromoCardData: ServicePromoCardProps[];
}
