// highlightSearchText , renderItems

// Path: src/utils/searchUtils.js

export const renderItems = (items, renderItem) => {
  return items.map((item, index) => renderItem(item, index));
};
