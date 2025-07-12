import { useTrackingStore } from '@/store';
import { Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useMemo, useState } from 'react';
import { ClientOnly } from '@/components/client-only';
import { useInterval } from '@/hooks/use-interval';

function useLastFeedTimer() {
  const { getLastFeeding } = useTrackingStore();

  const lastFeeding = getLastFeeding();
  const [timeAgo, setTimeAgo] = useState<string | null>(null);

  const shouldShow = useMemo(() => {
    return lastFeeding && !lastFeeding.active;
  }, [lastFeeding]);

  useInterval(
    () => {
      if (!lastFeeding) {
        setTimeAgo(null);
        return;
      }
      setTimeAgo(
        formatDistanceToNow(lastFeeding.timestamp, { addSuffix: true })
      );
    },
    shouldShow ? 30000 : null
  );

  return { shouldShow, timeAgo, lastFeeding };
}

export function LastFeedTimer() {
  const { shouldShow, timeAgo, lastFeeding } = useLastFeedTimer();

  return (
    <ClientOnly>
      {shouldShow && (
        <div className='mb-6 p-4 rounded-2xl border-2 bg-pastel-card border-pastel shadow-sm'>
          <div className='flex items-center justify-center gap-2'>
            <Clock className='h-4 w-4 text-pastel-secondary' />
            <span className='text-sm font-medium text-pastel-secondary'>
              Last feed was{' '}
              <strong className='text-pastel-primary'>{timeAgo}</strong> on the{' '}
              <span className='inline-flex items-center px-2 py-1 rounded-full bg-pastel-accent border border-pastel-accent text-pastel-primary font-bold text-xs uppercase tracking-wide'>
                {lastFeeding?.side}
              </span>{' '}
              side
            </span>
          </div>
        </div>
      )}
    </ClientOnly>
  );
}
