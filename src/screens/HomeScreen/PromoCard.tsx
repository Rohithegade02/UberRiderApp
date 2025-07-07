import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { PromoCardProps } from './types';
import { HomeScreenText } from './constants';

// Promo Card Presentational Component
export const PromoCard = ({
  promoCardData,
}: {
  promoCardData: PromoCardProps[];
}) => {
  if (!promoCardData) {
    return null;
  }
  return (
    <View style={styles.promoCardContainer}>
      {promoCardData?.map((item, index) => {
        return (
          <PromoCardItem
            key={index}
            title={item.title}
            image={item.image}
            promo={item.promo}
          />
        );
      })}
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
