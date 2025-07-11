import { FeedingTracker } from '@/components/feeding/feeding-tracker';
import { DiaperTracker } from '@/components/diaper/diaper-tracker';

export default function Home() {
  return (
    <div className='space-y-8'>
      <FeedingTracker />
      <DiaperTracker />
    </div>
  );
}
