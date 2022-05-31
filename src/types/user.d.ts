export interface User {
  id: Key | null | undefined;
  name: string;
  email: string;
  location: string;
  isAvailable: boolean;
  imageUrl: string;
  description: string;
}
