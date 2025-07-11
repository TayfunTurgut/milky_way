export interface FeedingSession {
  id: string;
  side: 'left' | 'right';
  timestamp: Date;
  active: boolean;
  duration?: number;
}

export interface DiaperChange {
  id: string;
  type: 'pee' | 'poop' | 'both';
  timestamp: Date;
}
