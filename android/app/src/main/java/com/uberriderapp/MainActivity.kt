package com.uberriderapp

import android.animation.ObjectAnimator
import android.os.Build
import android.os.Bundle
import android.view.View
import android.view.ViewTreeObserver
import android.view.animation.AnticipateInterpolator
import androidx.core.animation.doOnEnd
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    override fun getMainComponentName(): String = "UberRiderApp"

    /**
     * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
     * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
     */
    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

    override fun onCreate(savedInstanceState: Bundle?) {
        // Install splash screen before calling super.onCreate()
        val splashScreen = installSplashScreen()
        
        super.onCreate(savedInstanceState)

        // Keep the splash screen visible for longer to let React Native initialize
        var isReady = false
        val content: View = findViewById(android.R.id.content)
        content.viewTreeObserver.addOnPreDrawListener(
            object : ViewTreeObserver.OnPreDrawListener {
                override fun onPreDraw(): Boolean {
                    return if (isReady) {
                        // The content is ready; start drawing.
                        content.viewTreeObserver.removeOnPreDrawListener(this)
                        true
                    } else {
                        // The content is not ready; suspend.
                        false
                    }
                }
            }
        )

        // Set up the custom exit animation for Android 12+
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            splashScreen.setOnExitAnimationListener { splashScreenView ->
                // Create custom fade out animation
                val fadeOut = ObjectAnimator.ofFloat(
                    splashScreenView,
                    "alpha",
                    1f,
                    0f
                )
                fadeOut.interpolator = AnticipateInterpolator()
                fadeOut.duration = 300L

                // Call SplashScreenView.remove at the end of your custom animation.
                fadeOut.doOnEnd { splashScreenView.remove() }
                fadeOut.start()
            }
        }

        // Allow React Native to initialize properly
        // You can replace this with your actual loading logic
        android.os.Handler(android.os.Looper.getMainLooper()).postDelayed({
            isReady = true
        }, 1500) // 1.5 seconds delay to allow RN to initialize
    }
}