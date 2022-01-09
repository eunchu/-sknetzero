interface BreakpointsProps {
  // 필요시 breakpoint 추가하여 사용해주세요
  desktopS: number;
  tablet: number;
  mobile: number;
}
const breakpoints: BreakpointsProps = {
  desktopS: 1024,
  tablet: 768,
  mobile: 480,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
