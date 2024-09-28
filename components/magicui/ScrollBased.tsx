import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function ScrollBasedVelocity() {
  return (
    <VelocityScroll
      text="From Idea to Completion, we bring Full-Stack Expertise"
      default_velocity={1}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
