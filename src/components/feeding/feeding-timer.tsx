import { useTrackingStore } from '@/store';
import { useEffect, useMemo, useState } from 'react';
import { ClientOnly } from '@/components/client-only';
import { useInterval } from '@/hooks/use-interval';

interface FeedingTimerProps {
  side: 'left' | 'right';
}

function useFeedingTimer(side: 'left' | 'right') {
  const { getLastFeeding } = useTrackingStore();
  const [elapsed, setElapsed] = useState(0);
  const lastFeeding = getLastFeeding();

  const shouldShow = useMemo(() => {
    return lastFeeding?.active && lastFeeding.side === side;
  }, [lastFeeding, side]);

  const updateElapsed = () => {
    if (!shouldShow || !lastFeeding) return;

    const now = new Date().getTime();
    const start = new Date(lastFeeding.timestamp).getTime();
    setElapsed(Math.floor((now - start) / 1000));
  };

  useEffect(() => updateElapsed(), [shouldShow, lastFeeding]);

  useInterval(() => updateElapsed(), shouldShow && lastFeeding ? 1000 : null);

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  return { shouldShow, minutes, seconds };
}

export function FeedingTimer({ side }: FeedingTimerProps) {
  const { shouldShow, minutes, seconds } = useFeedingTimer(side);

  return (
    <ClientOnly>
      {shouldShow && (
        <div className='text-center mb-4 p-3 rounded-lg border bg-pastel-accent border-pastel-accent'>
          <div className='text-2xl font-mono font-bold text-pastel-primary'>
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')}
          </div>
          <div className='text-sm capitalize text-pastel-secondary'>
            {side} side active
          </div>
        </div>
      )}
    </ClientOnly>
  );
}
