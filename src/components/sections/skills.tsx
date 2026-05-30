import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import SkillsInteractiveGrid from "./SkillsInteractiveGrid";

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="w-full h-auto min-h-screen md:min-h-[150dvh] pointer-events-none relative z-10">
      <SectionHeader id='skills' title="Tech Stack" desc="(hint: press a key)" />
      <SkillsInteractiveGrid />
    </SectionWrapper>
  );
};

export default SkillsSection;
