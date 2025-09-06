
export interface ShortenedUrl {
  id: string;
  longUrl: string;
  shortCode: string;
  clicks: number;
  createdAt: string;
  summary?: string;
  category?: string;
}
