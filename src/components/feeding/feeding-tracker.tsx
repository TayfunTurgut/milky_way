'use client';

import { FeedingTrackerButton } from '@/components/feeding/feeding-tracker-button';
import { useTrackingStore } from '@/store';
import { FeedingTimer } from '@/components/feeding/feeding-timer';
import { LastFeedTimer } from '@/components/feeding/last-feed-timer';
import { SuggestedFeedingWrapper } from '@/components/feeding/suggested-feeding-wrapper';
import { toast } from 'sonner';
import { FeedingHistory } from '@/components/feeding/feeding-history';

export function FeedingTracker() {
  const { addFeeding, completeFeeding, getLastFeeding } = useTrackingStore();

  const sides = ['left', 'right'] as const;
  type Side = (typeof sides)[number];

  const startFeeding = (side: Side) => {
    addFeeding({
      side,
      active: true,
      timestamp: new Date()
    });
    toast.success(`Started feeding on the ${side} side`);
  };

  const stopFeeding = () => {
    const lastFeeding = getLastFeeding();
    if (lastFeeding && lastFeeding.active) {
      const duration = Math.floor(
        (new Date().getTime() - new Date(lastFeeding.timestamp).getTime()) /
          1000
      );
      completeFeeding(lastFeeding.id, duration);
      toast.success(
        `Stopped feeding on the ${lastFeeding.side} side. Duration: ${Math.floor(
          duration / 60
        )} minutes ${duration % 60} seconds`
      );
    }
  };

  const onButtonClick = (side: Side) => {
    const lastFeeding = getLastFeeding();
    if (lastFeeding?.active) {
      stopFeeding();
    } else {
      startFeeding(side);
    }
  };

  return (
    <div className='flex items-center justify-center p-4'>
      <div className='relative w-full max-w-2xl rounded-3xl p-4 shadow-xl bg-pastel-card'>
        <div className='absolute top-4 right-4 z-10'>
          <FeedingHistory />
        </div>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold mb-2 text-pastel-primary'>
            Feeding Tracker
          </h1>
          <p className='text-lg text-pastel-secondary'>
            Track your baby&apos;s feeding sessions
          </p>
        </div>

        <LastFeedTimer />

        <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
          {sides.map(side => (
            <div key={side} className={'flex flex-col'}>
              <FeedingTimer side={side} />
              <SuggestedFeedingWrapper side={side}>
                <FeedingTrackerButton
                  side={side}
                  onClick={() => onButtonClick(side)}
                />
              </SuggestedFeedingWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
