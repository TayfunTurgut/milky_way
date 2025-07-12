import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTrackingStore } from '@/store';
import { ClearButton } from '@/components/clear-button';

export function FeedingHistory() {
  const { feedings } = useTrackingStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='rounded-full bg-white/80 dark:bg-gray-800/80 border-pastel-primary/30 text-pastel-primary hover:bg-pastel-primary/10 hover:text-pastel-primary shadow-sm'
        >
          <History className='w-4 h-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-pastel-card border-pastel-primary/20 max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-pastel-primary text-xl font-bold'>
            Feeding History
          </DialogTitle>
          <DialogDescription className='text-pastel-secondary'>
            View your recent feeding sessions
          </DialogDescription>
        </DialogHeader>
        <div className='max-h-96 overflow-y-auto'>
          {feedings.length ? (
            <div className='space-y-3'>
              {feedings.map(feeding => (
                <div
                  key={feeding.id}
                  className='bg-white/50 dark:bg-gray-800/50 rounded-3xl p-3 border border-pastel-primary/10'
                >
                  <div className='flex justify-between items-start'>
                    <div>
                      <div className='font-medium text-pastel-primary capitalize'>
                        {feeding.side} side
                      </div>
                      <div className='text-sm text-pastel-secondary'>
                        {new Date(feeding.timestamp).toLocaleString()}
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='text-right'>
                        <div className='text-sm font-medium text-pastel-primary'>
                          {feeding.duration
                            ? `${Math.floor(feeding.duration / 60)}:${(feeding.duration % 60).toString().padStart(2, '0')}`
                            : 'Ongoing'}
                        </div>
                      </div>
                      <ClearButton id={feeding.id} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center py-8 text-pastel-secondary'>
              <History className='w-12 h-12 mx-auto mb-3 opacity-50' />
              <p>No feeding sessions recorded yet</p>
              <p className='text-xs mt-1'>
                Start tracking to see your history here
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
