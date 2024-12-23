import { BorderBeam } from "@/components/ui/border-beam";
import SubscribeSection from "./subscribe-section";

export function BorderBeamDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <SubscribeSection />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
