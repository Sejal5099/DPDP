export type BackdropPalette = 'aurora' | 'ocean' | 'sunset';
export type ThemeMode = 'light' | 'dark';

interface InteractiveBackdropProps {
  palette: BackdropPalette;
  theme: ThemeMode;
}

export function InteractiveBackdrop({ palette, theme }: InteractiveBackdropProps) {
  const darkBase =
    palette === 'ocean'
      ? 'from-[#09121E] via-[#0D1A2B] to-[#081926]'
      : palette === 'sunset'
        ? 'from-[#10101D] via-[#131829] to-[#0B1622]'
        : 'from-[#0B111E] via-[#111B2E] to-[#0B1923]';

  const lightBase =
    palette === 'ocean'
      ? 'from-[#EDF8FC] via-[#F5FBFE] to-[#EAF9F8]'
      : palette === 'sunset'
        ? 'from-[#FAF4F6] via-[#F7F9FC] to-[#EFF9FB]'
        : 'from-[#EEF7FA] via-[#F5FAFC] to-[#ECF9F4]';

  const baseGradient = theme === 'dark' ? darkBase : lightBase;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-0 pointer-events-none bg-gradient-to-br transition-colors duration-300 ${baseGradient}`}
    />
  );
}
