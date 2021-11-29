export type Course = {
  id: number;
  title: string;
  description: string;
  image: File | null;
  teacher: string;
  created_at: number;
  updated_at: number;
  classes: string[];
}