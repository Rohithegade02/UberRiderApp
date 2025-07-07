import { LoginSocialButtonProps } from './types';
import { CustomButton } from '../../components/CustomButton';
import { styles } from './styles';
import { LoginScreenText } from './constants';
import { memo, useMemo } from 'react';
import { CustomIcon } from '../../components/CustomIcon';

export const LoginSocialButton = memo(
  ({
    handleGoogleLogin,
    handleAppleLogin,
    handleEmailLogin,
  }: LoginSocialButtonProps) => {
    const buttons = useMemo(
      () => [
        {
          text: LoginScreenText.loginWithGoogle,
          onPress: handleGoogleLogin,
          icon: (
            <CustomIcon name="logo-google" iconFamily="Ionicons" size={24} />
          ),
        },
        {
          text: LoginScreenText.loginWithApple,
          onPress: handleAppleLogin,
          icon: <CustomIcon name="apple" iconFamily="FontAwesome" size={24} />,
        },
        {
          text: LoginScreenText.loginWithEmail,
          onPress: handleEmailLogin,
          icon: (
            <CustomIcon
              name="email"
              iconFamily="MaterialCommunityIcons"
              size={24}
            />
          ),
        },
      ],
      [handleAppleLogin, handleEmailLogin, handleGoogleLogin],
    );

    return (
      <>
        {buttons.map(({ text, onPress, icon }) => (
          <CustomButton
            key={text}
            buttonText={text}
            buttonStyle={styles.socialButton}
            buttonTextStyle={styles.socialButtonText}
            onPress={onPress}
            icon={icon}
            iconPosition="left"
            iconColor="black"
          />
        ))}
      </>
    );
  },
);
