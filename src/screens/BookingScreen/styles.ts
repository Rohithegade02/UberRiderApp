import { Dimensions, StyleSheet } from 'react-native';
import { BoldFont18, Colors, RegularFont14 } from '../../constants';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: Colors.grayBackground,
  },
  bottomSheetContentContainer: {
    flex: 1,
    padding: 12,
  },
  bottomSheetTitle: {
    ...BoldFont18,
    color: Colors.textwhite,
    alignSelf: 'center',
  },
  bottomSheetHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    // paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  bottomSheet100Container: {
    gap: 12,
  },
  dropDownContainer: {
    backgroundColor: Colors.lightText,
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 12,
    gap: 4,
  },
  dropDownMainContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  dropDownTextStyle: {
    ...RegularFont14,
    color: Colors.textwhite,
  },
  handleIndicatorStyle: {
    backgroundColor: Colors.whereToInputBackground,
    width: 48,
  },
  riderInput: {
    borderColor: Colors.textwhite,
    borderWidth: 0,
    borderRadius: 24,
    width: width * 0.7,
    height: height * 0.06,
    padding: 0,
    color: Colors.textwhite,
  },
  riderInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    borderColor: Colors.textwhite,
    borderWidth: 2,
    borderRadius: 24,
    padding: 12,
    marginTop: 4,
  },
  riderInputMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  lineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 2,
    height: 10,
    backgroundColor: Colors.textwhite,
  },
  predictionsContainer: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginTop: 5,
    maxHeight: 200, // Limit the height of the suggestions list
    zIndex: 1,
  },
  predictionRow: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayBorder,
  },
  predictionText: {
    color: Colors.black,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
