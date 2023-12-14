export const rgba = (hex: string, opacity: number): string => {
  let r: number = 0,
    g: number = 0,
    b: number = 0;

  // Ensure hex is a valid color string
  if (hex[0] !== "#" || (hex.length !== 4 && hex.length !== 7)) {
    throw new Error("Invalid hex color format");
  }

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
