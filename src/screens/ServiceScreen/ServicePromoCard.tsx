import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { IMAGE } from '../../constants';
import { ServicePromoCardProps } from './types';

// Promo Card Presentational Component
export const ServicePromoCard = () => {
  return (
    <View style={styles.promoCardContainer}>
      <ServicePromoCardItem title="Ride" image={IMAGE.carImage} promo={true} />
      <ServicePromoCardItem
        title="Auto"
        image={IMAGE.autoImage}
        promo={false}
      />
    </View>
  );
};
const ServicePromoCardItem = ({ title, image }: ServicePromoCardProps) => {
  return (
    <View style={styles.promoCardItemContainer}>
      <Image source={image as any} style={styles.promoImage} />
      <Text style={styles.promoTitle}>{title}</Text>
    </View>
  );
};
