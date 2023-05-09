export const ICON_MAP = new Map();

addMapping([0, 1], 'weather-sunny');
addMapping([2, 3], 'weather-partly-cloudy');
addMapping([45, 48], 'weather-fog');
addMapping([51, 61, 80], 'weather-partly-rainy');
addMapping([53, 56, 63, 66, 81], 'weather-rainy');
addMapping([55, 57, 65, 67], 'weather-pouring');
addMapping([71, 73], 'weather-snowy');
addMapping([75, 77], 'weather-snowy-heavy');
addMapping([82], 'weather-lightning-rainy');
addMapping([85, 86], 'weather-snowy-rainy');
addMapping([95], 'weather-lightning');
addMapping([96, 99], 'weather-hail');

function addMapping(values, icon) {
  values.forEach(value => {
    ICON_MAP.set(value, icon);
  });
}
