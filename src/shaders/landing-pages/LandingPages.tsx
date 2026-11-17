import {
  splitTypographyProps,
  usePageTypography,
  type PageTypographyProps,
} from "./pageTypography";
import { LandingPageFrame, type LandingPageProps } from "./LandingPageFrame";
import { KAGE_TYPOGRAPHY } from "./pageRecipes";

export { LandingPageFrame, applyBackgroundPresentation } from "./LandingPageFrame";
export type { LandingPageFrameProps, LandingPageProps } from "./LandingPageFrame";

export type KageLandingPageProps = LandingPageProps &
  PageTypographyProps & {
    sourceUrl?: string;
  };

export function KageLandingPage({
  sourceUrl = `${import.meta.env.BASE_URL}landing-pages/kage.html`,
  ...props
}: KageLandingPageProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(KAGE_TYPOGRAPHY, type);
  return (
    <LandingPageFrame
      {...frame}
      customization={customization}
      title="Nikhil Meshram — 3D Interactive Portfolio"
      sourceUrl={sourceUrl}
    />
  );
}
