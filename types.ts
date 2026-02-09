
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  time: string;
  avatar: string;
}

export type Language = 'AR' | 'EN';

export interface WorkingHour {
  day: string;
  morningOpen: string;
  morningClose: string;
  eveningOpen: string;
  eveningClose: string;
  isClosed?: boolean;
}
