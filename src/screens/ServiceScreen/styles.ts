import { StyleSheet } from 'react-native';
import { BoldFont16, BoldFont24, Colors, RegularFont12 } from '../../constants';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    padding: 12,
    gap: 20,
  },
  title: {
    ...BoldFont24,
    color: Colors.textwhite,
    fontSize: 28,
  },
  subtitle: {
    ...BoldFont16,
    color: Colors.textwhite,
  },
  promoImage: {
    height: 40,
    width: 40,
    borderRadius: 12,
    alignItems: 'flex-end',
  },
  promoCardContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  promoTitle: {
    ...RegularFont12,
    color: Colors.textgray,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  promoText: {
    backgroundColor: Colors.greenBackground,
    ...RegularFont12,
    color: Colors.white,
    position: 'absolute',
    top: -10,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 12,
    left: '42%',
    opacity: 0.7,
  },
  promoCardItemContainer: {
    backgroundColor: Colors.grayBorder,
    height: height * 0.12,
    flex: 1,
    borderRadius: 16,
    padding: 12,
    borderColor: Colors.grayBorder,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  serviceMainContainer: {
    gap: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    padding: 12,
  },
});
