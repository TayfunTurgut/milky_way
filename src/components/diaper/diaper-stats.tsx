'use client';

import { useTrackingStore } from '@/store';

export function DiaperStats() {
  const { diapers } = useTrackingStore();

  // Calculate today's stats
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const todaysDiapers = diapers.filter(diaper => {
    const diaperDate = new Date(diaper.timestamp);
    diaperDate.setHours(0, 0, 0, 0);
    return diaperDate.getTime() === today.getTime();
  });

  const peeCount = todaysDiapers.filter(d => d.type === 'pee' || d.type === 'both').length;
  const poopCount = todaysDiapers.filter(d => d.type === 'poop' || d.type === 'both').length;

  return (
    <div className='grid grid-cols-2 gap-4 mb-4'>
      <div className='bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 text-center border border-yellow-200 dark:border-yellow-800'>
        <div className='text-2xl font-bold text-yellow-600 dark:text-yellow-400'>
          {peeCount}
        </div>
        <div className='text-sm text-yellow-700 dark:text-yellow-300 flex items-center justify-center gap-1'>
          <span>💧</span>
          <span>Pees Today</span>
        </div>
      </div>
      <div className='bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 text-center border border-amber-200 dark:border-amber-800'>
        <div className='text-2xl font-bold text-amber-700 dark:text-amber-400'>
          {poopCount}
        </div>
        <div className='text-sm text-amber-800 dark:text-amber-300 flex items-center justify-center gap-1'>
          <span>💩</span>
          <span>Poops Today</span>
        </div>
      </div>
    </div>
  );
}