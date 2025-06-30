import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { IMAGE } from '../../constants';
import { PromoCardProps } from './types';
import { HomeScreenText } from './constants';
// Promo Card Presentational Component
export const PromoCard = () => {
  return (
    <View style={styles.promoCardContainer}>
      <PromoCardItem title="Ride" image={IMAGE.carImage} promo={true} />
      <PromoCardItem title="Auto" image={IMAGE.autoImage} promo={false} />
    </View>
  );
};
const PromoCardItem = ({ title, image, promo }: PromoCardProps) => {
  return (
    <View style={styles.promoCardItemContainer}>
      {promo && <Text style={styles.promoText}>{HomeScreenText.promo}</Text>}
      <Image source={image as any} style={styles.promoImage} />
      <Text style={styles.promoTitle}>{title}</Text>
    </View>
  );
};
