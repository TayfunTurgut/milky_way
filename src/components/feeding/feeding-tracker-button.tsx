import { Button } from '@/components/ui/button';
import { useTrackingStore } from '@/store';
import { useMemo } from 'react';
import { ClientOnly } from '@/components/client-only';

interface FeedingTrackerButtonProps {
  side: 'left' | 'right';
  onClick: () => void;
}

function useFeedingButton(side: 'left' | 'right') {
  const { getLastFeeding } = useTrackingStore();
  const lastFeeding = getLastFeeding();

  const shouldShow = useMemo(() => {
    return !(lastFeeding?.active && lastFeeding.side !== side);
  }, [lastFeeding, side]);

  const buttonText = useMemo(() => {
    if (lastFeeding?.active && lastFeeding.side === side) return 'Stop Feeding';
    return `Start on ${side} side`;
  }, [lastFeeding, side]);

  return { shouldShow, buttonText };
}

export function FeedingTrackerButton({
  side,
  onClick
}: FeedingTrackerButtonProps) {
  const { shouldShow, buttonText } = useFeedingButton(side);

  return (
    <ClientOnly>
      {shouldShow && (
        <Button
          onClick={onClick}
          className='capitalize rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 border-2 px-6 py-4 min-h-[3rem] bg-pastel-primary text-pastel-on-primary border-pastel-primary'
        >
          {buttonText}
        </Button>
      )}
    </ClientOnly>
  );
}
