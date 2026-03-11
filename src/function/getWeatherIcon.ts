const getWeatherIcon = (code: number) => {
  const icons: Record<number, string> = {
    0: "icon-sunny.webp",
    1: "icon-partly-cloudy.webp",
    2: "icon-partly-cloudy.webp",
    3: "icon-overcast.webp",
    45: "icon-fog.webp",
    48: "icon-fog.webp",
    51: "icon-drizzle.webp",
    61: "icon-rain.webp",
    71: "icon-snow.webp",
    80: "icon-rain.webp",
    95: "icon-storm.webp",
  };
  return `./images/${icons[code] || "icon-sunny.webp"}`;
};

export default getWeatherIcon;
