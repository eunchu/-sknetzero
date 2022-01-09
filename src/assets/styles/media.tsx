interface BreakpointsProps {
  // 필요시 breakpoint 추가하여 사용해주세요
  tablet: number;
  mobile: number;
}
const breakpoints: BreakpointsProps = {
  tablet: 768,
  mobile: 479,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
