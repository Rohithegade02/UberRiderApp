import { Dimensions, StyleSheet } from 'react-native';
import {
  BoldFont16,
  BoldFont18,
  BoldFont20,
  Colors,
  RegularFont12,
  RegularFont14,
  RegularFont16,
  SemiBoldFont14,
} from '../../constants';

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
    width: width * 0.65,
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
    width: width * 0.8,
    // alignSelf: 'center',
  },
  predictionRow: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayBorder,
  },
  predictionText: {
    ...RegularFont12,
    color: Colors.black,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  destinationSelectionContainer: {
    // marginTop: 12,
    gap: 12,
  },
  destinationDropDown: {
    borderRadius: 8,
    backgroundColor: Colors.whereToInputBackground,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  destinationDropDownTextStyle: {
    flexDirection: 'row',
    flex: 1,
    ...RegularFont16,
    color: Colors.textgray,
  },
  movePinButton: {
    backgroundColor: Colors.textwhite,
    // opacity: 0.8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  movePinButtonText: {
    ...BoldFont16,
    color: Colors.textgray,
    alignSelf: 'center',
  },
  movePinText: {
    ...SemiBoldFont14,
    color: Colors.textgray,
    alignSelf: 'center',
  },
  destinationDivider: {
    height: 1.5,
    backgroundColor: Colors.grayBorder,
    width: '100%',
  },
  vehicleImage: {
    width: width * 0.15,
    height: width * 0.15,
    resizeMode: 'contain',
  },
  vehicleName: {
    ...RegularFont16,
    color: Colors.textwhite,
    opacity: 0.8,
  },
  vehicleDropOffTime: {
    ...RegularFont12,
    color: Colors.textwhite,
    opacity: 0.8,
  },
  vehiclePrice: {
    ...BoldFont16,
    color: Colors.textwhite,
    opacity: 0.8,
  },
  vehicleSelectionCard: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    gap: 12,
  },
  vehicleTextContainer: {
    flex: 1,
  },
  vehicleSelectionCardActive: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    gap: 12,
    borderWidth: 2,
    borderColor: Colors.textwhite,
  },
  dropDownCashTextStyle: {
    flex: 1,
    ...RegularFont16,
    color: Colors.textwhite,
  },
  confirmationSheetContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  riderInputSubMainContainer: {
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    padding: 20,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  modalContent: {
    backgroundColor: Colors.lightBlack,
    padding: 24,
    borderRadius: 12,
    width: '80%',
  },
  modalTitle: {
    ...BoldFont20,
    color: Colors.textwhite,
  },
  modalSubtitle: {
    ...BoldFont16,
    color: Colors.textwhite,
  },
  modalButton: {
    marginTop: 16,
  },
  modalButtonText: {
    ...BoldFont16,
    color: Colors.textwhite,
  },
});
