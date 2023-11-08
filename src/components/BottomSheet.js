import GorhomBottomSheet, { BottomSheetFooter } from "@gorhom/bottom-sheet";
import { BlurView } from "@react-native-community/blur";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors, Dimensions } from "~/theme";

/**
 * @param {{
 *  open: boolean,
 *  onClose: () => null,
 *  snapPoints: Array<string | number>,
 *  snapToIndex: number,
 *  footerComponent: React.FC,
 *  footerContainerStyle: import('react-native').StyleProp<import('react-native').ViewStyle>,
 *  bottomSheetProps: import('@gorhom/bottom-sheet').BottomSheetProps
 *  enableBlurBackdrop: boolean,
 *  enableModalWrapper: boolean,
 *  disablePanDownToClose: boolean,
 *  disablePressBackdropToClose: boolean,
 * }} param0
 */
const BottomSheet = ({
  children,
  open,
  onClose = () => {},
  snapPoints = ["95%"],
  snapToIndex = -1,
  footerComponent,
  footerContainerStyle,
  enableBlurBackdrop,
  bottomSheetProps,
  enableModalWrapper,
  disablePanDownToClose = false,
  disablePressBackdropToClose = false,
}) => {
  const bottomSheetRef = useRef();
  const { top: safeAreaTop } = useSafeAreaInsets();

  const [snapToIdx, setSnapToIdx] = useState(snapToIndex);

  useEffect(() => {
    setSnapToIdx(snapToIndex);
  }, [snapToIndex]);

  useEffect(() => {
    if (open) {
      setSnapToIdx(0);
    } else {
      handleClose();
    }
  }, [open, handleClose]);

  const handleClose = useCallback(() => {
    bottomSheetRef.current?.close();
    setSnapToIdx(-1);
    onClose();
  }, [onClose]);

  const renderBackdrop = useCallback(
    (props) => (
      <Backdrop
        onBackdropPress={!disablePressBackdropToClose ? handleClose : () => {}}
        enableBlur={enableBlurBackdrop}
        {...props}
      />
    ),
    [enableBlurBackdrop, disablePressBackdropToClose, handleClose]
  );

  const renderFooter = useCallback(
    (props) => (
      <BottomSheetFooter {...props} style={footerContainerStyle}>
        {footerComponent}
      </BottomSheetFooter>
    ),
    [footerContainerStyle, footerComponent]
  );

  const renderBottomSheet = useCallback(
    () => (
      <GorhomBottomSheet
        ref={bottomSheetRef}
        index={snapToIdx}
        snapPoints={snapPoints}
        enablePanDownToClose={!disablePanDownToClose}
        android_keyboardInputMode="adjustResize"
        onChange={(idx) => {
          if (idx < 0) {
            handleClose();
          }
        }}
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.bottomSheetIndicatorStyle}
        backdropComponent={renderBackdrop}
        {...(footerComponent
          ? {
              footerComponent: renderFooter,
            }
          : {})}
        {...bottomSheetProps}
      >
        {children}
      </GorhomBottomSheet>
    ),
    [
      bottomSheetProps,
      children,
      disablePanDownToClose,
      footerComponent,
      handleClose,
      renderBackdrop,
      renderFooter,
      snapPoints,
      snapToIdx,
    ]
  );

  if (enableModalWrapper) {
    return (
      <Modal
        transparent={true}
        visible={open || snapToIdx >= 0}
        animationType="none"
      >
        <View style={{ paddingTop: safeAreaTop }}>
          <GestureHandlerRootView style={{ width: "100%", height: "100%" }}>
            {renderBottomSheet()}
          </GestureHandlerRootView>
        </View>
      </Modal>
    );
  }

  return renderBottomSheet();
};

const Backdrop = ({
  animatedIndex,
  enableBlur,
  style,
  onBackdropPress = () => {},
}) => {
  const { top: safeAreaTop } = useSafeAreaInsets();

  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 2],
      Extrapolate.CLAMP
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        height: Dimensions.screen_height,
        width: "100%",
        marginTop: -safeAreaTop,
      },
      containerAnimatedStyle,
    ],
    [style, safeAreaTop, containerAnimatedStyle]
  );

  return (
    <TouchableWithoutFeedback onPress={onBackdropPress}>
      <Animated.View style={containerStyle}>
        <View
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundColor: `${Colors.main_black}70`,
          }}
        />
        {enableBlur && (
          <BlurView
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: 1,
            }}
            blurType="light"
            blurAmount={1}
            reducedTransparencyFallbackColor="white"
          />
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bottomSheetBackground: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },

  bottomSheetIndicatorStyle: {
    backgroundColor: Colors.primary_color,
  },
});

export default BottomSheet;
