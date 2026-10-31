// Soft SVG wave. `fill` is the colour of the section BELOW; set the section above as the parent background.
export default function WaveDivider({ fill = '#fdf6ec', flip = false, className = '' }) {
  return (
    <svg className={`wave ${className}`} style={flip ? { transform: 'scaleY(-1)' } : undefined}
         viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
      <path fill={fill} d="M0 55 C200 105 420 5 720 48 S1230 100 1440 38 V100 H0Z" />
    </svg>
  );
}
