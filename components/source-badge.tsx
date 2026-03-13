import { DuaSources } from "@/components/dua-sources";
import type { DuaItem } from "@/lib/types";

type SourceBadgeProps = Pick<
  DuaItem,
  "sourceType" | "authenticity" | "sourceReference" | "sourceUrl"
>;

export function SourceBadge({
  sourceType,
  authenticity,
  sourceReference,
  sourceUrl,
}: SourceBadgeProps) {
  return (
    <DuaSources
      sourceType={sourceType}
      authenticity={authenticity}
      sourceReference={sourceReference}
      sourceUrl={sourceUrl}
    />
  );
}
