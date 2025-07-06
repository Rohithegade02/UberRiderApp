import { Image, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ServicesText } from './constants';
import { ServicePromoCardProps, ServiceScreenProps } from './types';
import { IMAGE } from '../../constants';

export const ServiceScreen = ({ handleVehicleType }: ServiceScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{ServicesText.title}</Text>
      <Text style={styles.subtitle}> {ServicesText.Subtitle} </Text>
      <View style={styles.promoCardContainer}>
        <ServicePromoCardItem
          title="Ride"
          image={IMAGE.carImage}
          promo={true}
          onPress={() => handleVehicleType('Ride')}
        />
        <ServicePromoCardItem
          title="Auto"
          image={IMAGE.autoImage}
          promo={false}
          onPress={() => handleVehicleType('Auto')}
        />
      </View>
    </SafeAreaView>
  );
};

const ServicePromoCardItem = ({
  title,
  image,
  promo,
  onPress,
}: ServicePromoCardProps) => {
  return (
    <TouchableOpacity style={styles.promoCardItemContainer} onPress={onPress}>
      {promo && <Text style={styles.promoText}>{ServicesText.promo}</Text>}

      <Image source={image as any} style={styles.promoImage} />
      <Text style={styles.promoTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
