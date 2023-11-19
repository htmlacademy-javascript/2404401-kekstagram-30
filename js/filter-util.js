const EFFECT = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};
const EFFECT_FILTER = {
  [EFFECT.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [EFFECT.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [EFFECT.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [EFFECT.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [EFFECT.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

const EFFECT_OPTIONS = {
  [EFFECT.DEFAULT] : {
    min: 0,
    max: 100,
    step: 1,
  },
  [EFFECT.CHROME] : {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [EFFECT.SEPIA] : {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [EFFECT.MARVIN] : {
    min: 0,
    max: 100,
    step: 1,
  },
  [EFFECT.PHOBOS] : {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [EFFECT.HEAT] : {
    min: 1,
    max: 3,
    step: 0.1,
  },
};

export { EFFECT, EFFECT_FILTER, EFFECT_OPTIONS };
