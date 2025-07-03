# Uber Rider App – React Native (Assignment)

A work-in-progress Uber-like rider application built with **React Native + TypeScript**.

---

## ✨ Implemented so far

1. **Splash & Authentication flow**  
   • `SplashScreen` while an auth token is read from AsyncStorage.  
   • Phone-number login (`LoginScreen`).  
   • OTP delivery & verification via **Firebase Auth** ([sendOTP](cci:1://file:///Users/rohit/Native_Builds/UberRiderApp/src/screens/WelcomeBackScreen/WelcomeBackContainer.tsx:60:4-79:6), `verifyOTP`).  
   • Token persisted; user routed to the main app on success.

2. **Navigation**  
   • **React Navigation 6** – native-stack (root/auth) + bottom-tabs ([TabNavigator](cci:1://file:///Users/rohit/Native_Builds/UberRiderApp/src/navigation/TabNavigator.tsx:15:0-68:2)).  
   • Tabs: **Home**, **Service**, **Activity**, **Account**, each with a custom vector icon ([TabIcon](cci:2://file:///Users/rohit/Native_Builds/UberRiderApp/src/navigation/TabIcon.tsx:3:0-7:1)) – type-safety issue with `tabBarIcon` fixed.

3. **Screens & stubs**  
   • `HomeScreen`, `ServiceScreen`, `ActivityScreen`, `AccountScreen` placeholders.  
   • `BookingScreen` stub for future ride-booking flow.  
   • [WelcomeBackScreen](cci:2://file:///Users/rohit/Native_Builds/UberRiderApp/src/screens/WelcomeBackScreen/types.ts:11:0-13:1) – 6-digit OTP component, resend timer, auto-focus & back-space handling.

4. **Reusable components**  
   • [CustomInput](cci:2://file:///Users/rohit/Native_Builds/UberRiderApp/src/components/CustomInput/types.ts:3:0-10:31) – styled `TextInput` with error messaging.  
   • [CustomOTPInput](cci:2://file:///Users/rohit/Native_Builds/UberRiderApp/src/components/CustomOTPInput/types.ts:2:0-10:1) – array of one-digit inputs with focus management.  
   • [CustomIcon](cci:1://file:///Users/rohit/Native_Builds/UberRiderApp/src/components/CustomIcon/CustomIcon.tsx:9:0-81:2) – wrapper over several `react-native-vector-icons` families.

5. **Utilities / Hooks**  
   • `NavigationUtil` – global [navigate](cci:1://file:///Users/rohit/Native_Builds/UberRiderApp/src/navigation/NavigationUtil.tsx:8:0-12:1), [replace](cci:1://file:///Users/rohit/Native_Builds/UberRiderApp/src/navigation/NavigationUtil.tsx:14:0-18:1), [resetAndNavigate](cci:1://file:///Users/rohit/Native_Builds/UberRiderApp/src/navigation/NavigationUtil.tsx:20:0-29:1), [goBack](cci:1://file:///Users/rohit/Native_Builds/UberRiderApp/src/navigation/NavigationUtil.tsx:31:0-35:1) helpers.  
   • `useAsyncStorage` – promisified wrapper for AsyncStorage.

6. **Assets & Constants**  
   • Central image registry [src/constants/image.ts](cci:7://file:///Users/rohit/Native_Builds/UberRiderApp/src/constants/image.ts:0:0-0:0) (includes Uber splash logo).  
   • Color palette & route constants centralised.

7. **Android / Native configuration**  
   • Firebase modules linked (`@react-native-firebase/app`, `auth`).  
   • `compileSdk` / `targetSdk` 35.  
   • Manifest icon reference fixed to `@mipmap/ic_launcher` (round icon pending).  
   • [.gitignore](cci:7://file:///Users/rohit/Native_Builds/UberRiderApp/.gitignore:0:0-0:0) extended to ignore `.env` and `google-services.json`.

## 🚗 Ride workflow

The app models a ride as a finite-state workflow (see `RideState` enum):

| State                   | Description                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------ |
| `IDLE`                  | User has not started a ride request yet. Home screen idle.                           |
| `SELECTING_DESTINATION` | User is choosing the drop-off location on the map or via search.                     |
| `SELECTING_VEHICLE`     | Fare estimates & vehicle types (Auto, Car, etc.) are shown – user picks one.         |
| `CONFIRMING_PICKUP`     | Final confirmation screen (payment method, promo, notes) before requesting a driver. |
| `RIDE_STARTED`          | Driver accepted; map tracks the ride in real time until drop-off.                    |
| `RIDE_COMPLETED`        | Trip is finished; receipt & rating shown, then the workflow returns to `IDLE`.       |

These discrete states drive both UI rendering and backend requests, ensuring clear transitions and easier debugging.

---

## 🗂 Coding Patterns (high-level)

1. **Container components**
   • Container components are responsible for fetching data and managing state. They are also responsible for rendering the UI.
   • Container components are also responsible for handling navigation and routing.

2. **Presentational components**
   • Presentational components are responsible for rendering the UI. They are also responsible for handling user interactions.
   • Presentational components are also responsible for handling navigation and routing.
