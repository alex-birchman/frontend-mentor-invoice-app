const DESIGN_SYSTEM_COLORS = {
  PRIMARY: "hsl(252 94% 67%)",
  PRIMARY_LIGHT: "hsl(252 100% 73%)",
  SECONDARY: "hsl(231 36% 63%)",
  SECONDARY_DARK: "hsl(231 20% 61%)",
  SECONDARY_LIGHT: "hsl(231 75% 93%)",
  DARK_SECONDARY: "hsl(233 31% 17%)",
  DARK_SECONDARY_LIGHT: "hsl(233 30% 21%)",
  LIGHT_BACKGROUND: "hsl(240 27% 98%)",
  DARK_BACKGROUND: "hsl(233 30% 11%)",
  DANGER: "hsl(0 80% 63%)",
  DANGER_LIGHT: "hsla(0, 100%, 80%, 1)",
};

export const STATUS_COLORS_LIGHT = {
  "--color-danger": DESIGN_SYSTEM_COLORS.DANGER,
  "--color-danger-light": DESIGN_SYSTEM_COLORS.DANGER_LIGHT,
  "--color-status-paid": "hsl(160 67% 52%)",
  "--color-status-paid-bg": "hsla(160, 67%, 52%, 0.1)",
  "--color-status-pending": "hsl(34 100% 50%)",
  "--color-status-pending-bg": "hsla(34, 100%, 50%, 0.1)",
  "--color-status-draft": "hsl(231 20% 27%)",
  "--color-status-draft-bg": "hsla(231, 20%, 27%, 0.1)",
};

export const STATUS_COLORS_DARK = {
  ...STATUS_COLORS_LIGHT,
  "--color-status-draft": DESIGN_SYSTEM_COLORS.SECONDARY_LIGHT,
  "--color-status-draft-bg": "hsla(231, 20%, 27%, 0.5)",
};

export const LIGHT_COLORS = {
  "--color-text": "hsl(231 28% 7%)",
  "--color-text-light": DESIGN_SYSTEM_COLORS.SECONDARY_DARK,
  "--color-primary": DESIGN_SYSTEM_COLORS.PRIMARY,
  "--color-primary-light": DESIGN_SYSTEM_COLORS.PRIMARY_LIGHT,
  "--color-secondary": DESIGN_SYSTEM_COLORS.SECONDARY,
  "--color-secondary-light": DESIGN_SYSTEM_COLORS.SECONDARY_LIGHT,
  "--color-page-background": DESIGN_SYSTEM_COLORS.LIGHT_BACKGROUND,
  "--color-shadow": "hsla(231, 38%, 45%, 0.25)",
  "--color-shadow-light": "hsla(231, 38%, 45%, 0.1)",
  "--color-menu-background": "hsl(231, 20%, 27%)",
  "--color-menu-divider": "hsl(231 20% 36%)",
  "--color-icon": DESIGN_SYSTEM_COLORS.SECONDARY,
  "--color-icon-hover": DESIGN_SYSTEM_COLORS.SECONDARY_LIGHT,
  "--color-button-hover": DESIGN_SYSTEM_COLORS.SECONDARY,
  "--color-button-secondary": "hsl(231 20% 27%)",
  "--color-button-secondary-hover": "hsl(231 20% 27%)",
  "--color-button-tertiary": "hsl(231 67% 96%)",
  "--color-button-tertiary-hover": "hsl(231 73% 93%)",
  "--color-invoice-detail-items": "hsl(231 67% 99%)",
  "--color-input-background": "hsl(0 0% 100%)",
  "--color-input-placeholder": "hsla(0, 0%, 0%, 0.4)",
  "--color-sidebar-background": "hsl(0 0% 100%)",
  "--color-calendar-background": "hsl(0 0% 100%)",
  "--color-calendar-text": "hsl(0 0% 0%)",
  "--color-checkbox-background": "hsl(0 0% 100%)",
  "--color-checkbox-item-background": DESIGN_SYSTEM_COLORS.SECONDARY_LIGHT,
  "--color-content-background": "hsl(0 0% 100%)",
  "--color-content-secondary-background": "hsl(231, 20%, 27%)",
};

export const DARK_COLORS = {
  "--color-text": "hsl(0 0% 100%)",
  "--color-text-light": DESIGN_SYSTEM_COLORS.SECONDARY_LIGHT,
  "--color-primary": DESIGN_SYSTEM_COLORS.PRIMARY,
  "--color-primary-light": DESIGN_SYSTEM_COLORS.PRIMARY_LIGHT,
  "--color-secondary": DESIGN_SYSTEM_COLORS.SECONDARY_LIGHT,
  "--color-secondary-light": DESIGN_SYSTEM_COLORS.DARK_SECONDARY_LIGHT,
  "--color-page-background": DESIGN_SYSTEM_COLORS.DARK_BACKGROUND,
  "--color-shadow": "hsla(231, 38%, 45%, 0)",
  "--color-shadow-light": "hsla(231, 38%, 45%, 0)",
  "--color-menu-background": DESIGN_SYSTEM_COLORS.DARK_SECONDARY,
  "--color-menu-divider": "hsl(231 20% 36%)",
  "--color-icon": DESIGN_SYSTEM_COLORS.SECONDARY_DARK,
  "--color-icon-hover": DESIGN_SYSTEM_COLORS.SECONDARY_LIGHT,
  "--color-button-hover": DESIGN_SYSTEM_COLORS.SECONDARY_LIGHT,
  "--color-button-secondary": "hsl(231 20% 27%)",
  "--color-button-secondary-hover": DESIGN_SYSTEM_COLORS.DARK_SECONDARY,
  "--color-button-tertiary": DESIGN_SYSTEM_COLORS.DARK_SECONDARY_LIGHT,
  "--color-button-tertiary-hover": "hsl(233 30% 30%)",
  "--color-invoice-detail-items": DESIGN_SYSTEM_COLORS.DARK_SECONDARY_LIGHT,
  "--color-input-background": DESIGN_SYSTEM_COLORS.DARK_SECONDARY,
  "--color-input-placeholder": "hsla(0, 0%, 100%, 0.4)",
  "--color-sidebar-background": DESIGN_SYSTEM_COLORS.DARK_BACKGROUND,
  "--color-calendar-background": DESIGN_SYSTEM_COLORS.DARK_SECONDARY_LIGHT,
  "--color-calendar-text": DESIGN_SYSTEM_COLORS.SECONDARY_LIGHT,
  "--color-checkbox-background": DESIGN_SYSTEM_COLORS.DARK_SECONDARY_LIGHT,
  "--color-checkbox-item-background": DESIGN_SYSTEM_COLORS.DARK_SECONDARY,
  "--color-content-background": DESIGN_SYSTEM_COLORS.DARK_SECONDARY,
  "--color-content-secondary-background": "hsl(231 28% 7%)",
};

export const LIGHT_SHADOWS = {};

export const DARK_SHADOWS = {};

export const LIGHT_TOKENS = {
  ...LIGHT_COLORS,
  ...LIGHT_SHADOWS,
  ...STATUS_COLORS_LIGHT,
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
  ...DARK_SHADOWS,
  ...STATUS_COLORS_DARK,
};
