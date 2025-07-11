import { useTrackingStore } from '@/store';
import { ReactNode, useMemo } from 'react';
import { ClientOnly } from '@/components/client-only';

interface SuggestedFeedingWrapperProps {
  side: 'left' | 'right';
  children: ReactNode;
}

function useSuggestedFeeding(side: 'left' | 'right') {
  const { getLastFeeding, getNextSuggestedSide } = useTrackingStore();
  const lastFeeding = getLastFeeding();
  const suggestedSide = getNextSuggestedSide();

  const shouldShowSuggestion = useMemo(() => {
    return lastFeeding && !lastFeeding.active;
  }, [lastFeeding]);

  const isSuggested = useMemo(() => {
    return suggestedSide === side;
  }, [suggestedSide, side]);

  return { shouldShowSuggestion, isSuggested };
}

export function SuggestedFeedingWrapper({
  side,
  children
}: SuggestedFeedingWrapperProps) {
  const { shouldShowSuggestion, isSuggested } = useSuggestedFeeding(side);

  if (!shouldShowSuggestion) return <>{children}</>;

  return (
    <ClientOnly>
      <div
        className={`relative p-2 rounded-3xl ${
          isSuggested
            ? 'border-2 border-dashed border-pastel-accent bg-pastel-accent/10'
            : 'border-2 border-transparent'
        }`}
      >
        {children}
      </div>
    </ClientOnly>
  );
}
