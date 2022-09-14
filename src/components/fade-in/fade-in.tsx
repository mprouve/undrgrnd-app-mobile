import React, { useState, useEffect, useRef } from 'react'
import { Animated } from 'react-native'

type Props = {
  children: React.ReactNode
  duration?: number
}

export const FadeInView = ({ children, duration }: Props): JSX.Element => {
  const [loading, setIsLoading] = useState<boolean>(true)
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (loading) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration ?? 3000,
        useNativeDriver: true
      }).start()

      setIsLoading(false)
    }
  }, [duration, fadeAnim, loading])

  return (
    <Animated.View
      style={{
        opacity: fadeAnim
      }}>
      {children}
    </Animated.View>
  )
}

export default FadeInView
