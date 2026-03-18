/**
 * SacredArabicText Component
 *
 * A specialized component for rendering Arabic sacred text (Quran, Hadith, Duas)
 * with proper RTL direction, typography, and harakat (diacritical marks) support.
 *
 * Features:
 * - Automatic RTL direction and language attributes
 * - Optimized font stacks for Quran (IndoPak script) and Hadith variants
 * - Mobile-first harakat rendering with proper line-height
 * - Font feature settings for proper ligature and mark positioning
 * - Automatic detection of Quran annotation glyphs
 *
 * Usage:
 * ```tsx
 * <SacredArabicText variant="quran" size="lg">
 *   بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
 * </SacredArabicText>
 * ```
 *
 * Sizes: sm, md, lg, hero, quran
 * Variants: quran (IndoPak fonts), hadith (Noto Naskh Arabic)
 *
 * @see /app/typography-test/page.tsx for visual testing
 */
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const sizeClasses = {
  sm: "sacred-arabic-size-sm",
  md: "sacred-arabic-size-md",
  lg: "sacred-arabic-size-lg",
  hero: "sacred-arabic-size-hero",
  quran: "sacred-arabic-size-quran",
} as const;

const quranAnnotationPattern = /[\u06D6-\u06ED]/u;

type SacredArabicSize = keyof typeof sizeClasses;
type SacredArabicVariant = "quran" | "hadith";

type SacredArabicTextProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: SacredArabicSize;
  variant?: SacredArabicVariant;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "dir" | "lang">;

function extractTextContent(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(extractTextContent).join("");
  }

  return "";
}

export function SacredArabicText<T extends ElementType = "p">({
  as,
  children,
  className = "",
  size = "lg",
  variant = "hadith",
  ...rest
}: SacredArabicTextProps<T>) {
  const Component = as ?? "p";
  const hasAnnotationGlyphs =
    variant === "quran" && quranAnnotationPattern.test(extractTextContent(children));
  const variantClass =
    variant === "quran" ? "sacred-arabic-quran" : "sacred-arabic-hadith";
  const annotationClass = hasAnnotationGlyphs ? "sacred-arabic-annotation-safe" : "";

  return (
    <Component
      dir="rtl"
      lang="ar"
      translate="no"
      className={`sacred-arabic ${variantClass} ${annotationClass} ${sizeClasses[size]} text-right ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
