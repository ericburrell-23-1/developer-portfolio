export default function ProjectCSSColorFormat(colors) {
  return {
    "--project-primary-color": colors?.primary,
    "--project-secondary-color": colors?.secondary,
    "--project-opaque-primary-color": colors?.primaryOpaque,
    "--project-opaque-secondary-color": colors?.secondaryOpaque,
    "--project-detail-color": colors?.detail,
    "--project-contrast-color": colors?.contrast,
    "--project-background-color-1": colors?.background1,
    "--project-background-color-2": colors?.background2,
  };
}
