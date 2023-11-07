// highlightSearchText , renderItems

// Path: src/utils/searchUtils.js
import { Typography } from "~/components";

export const renderItems = (items, renderItem) => {
  return items.map((item, index) => renderItem(item, index));
};

export const highlightSearchText = (text, search) => {
  if (!search) {
    return text;
  }
  const regex = new RegExp(`(${search})`, "gi");
  return (
    <>
      {text.split(regex).map((part, i) =>
        regex.test(part) ? (
          <Typography key={i} type="l_bold">
            {part}
          </Typography>
        ) : (
          <Typography key={i} type="l_regular">
            {part}
          </Typography>
        )
      )}
    </>
  );
};
