export interface User {
  id: Key | null | undefined;
  name: string;
  email: string;
  location: string;
  isAvailable: boolean;
  imageUrl: string;
  description: string;
  projects: Project[];
  certifications: Certification[];
}

// export const User: User = {
//   projects: {
//     id: Key | null | undefined,
//     name: string,

//     linkUrl: string,
//     description: string,
//   },
// };
