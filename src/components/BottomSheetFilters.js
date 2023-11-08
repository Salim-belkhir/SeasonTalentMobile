import { useCallback, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomSheet from "./BottomSheet";

const BottomSheetFilters = ({ onClose = () => {}, open, setOpen }) => {
  const { bottom: safeAreaBottom } = useSafeAreaInsets();
  const [snapToIndex, setSnapToIndex] = useState(0);

  const handleClose = useCallback(() => {
    setSnapToIndex(-1);
    setOpen(false);
  }, [onClose]);

  return (
    <BottomSheet
      open={open}
      onClose={handleClose}
      snapPoints={["80%"]}
      snapToIndex={snapToIndex}
      enableModalWrapper
    >
      <Text>test</Text>
    </BottomSheet>
  );
};

export default BottomSheetFilters;

const styles = StyleSheet.create({});
