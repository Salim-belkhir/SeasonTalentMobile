/**
 * Icon component that renders an AntDesign icon with the specified name, size, and color.
 * @param {string} name - The name of the AntDesign icon to render.
 * @param {number} [size=24] - The size of the icon.
 * @param {string} [color='black'] - The color of the icon.
 * @param {object} otherProps - Any additional props to pass to the AntDesign component.
 * @returns {JSX.Element} - The AntDesign icon component.
 */
import { AntDesign } from "@expo/vector-icons";

const Icon = ({ name, size = 24, color = "black", ...otherProps }) => {
  return <AntDesign name={name} size={size} color={color} {...otherProps} />;
};

export default Icon;
