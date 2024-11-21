"use server";

export type Activity = {
  id: number;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
  description: string;
  href: string;
  createdAt: Date;
};

export async function getActivities(): Promise<Activity[]> {
  return new Promise((r) =>
    setTimeout(() => {
      r([
        {
          id: 1,
          user: {
            id: 1,
            name: "Bagas",
            avatar: "https://i.pravatar.cc/",
          },
          description: "membuat projek",
          href: "/projects/1",
          createdAt: new Date(2024, 8, 10, 10, 40, 56),
        },
        {
          id: 2,
          user: {
            id: 1,
            name: "Bagas",
            avatar: "https://i.pravatar.cc/",
          },
          description: "membuat projek",
          href: "/projects/1",
          createdAt: new Date(2024, 8, 10, 10, 40, 56),
        },
        {
          id: 3,
          user: {
            id: 1,
            name: "Bagas",
            avatar: "https://i.pravatar.cc/",
          },
          description: "membuat projek",
          href: "/projects/1",
          createdAt: new Date(2024, 8, 10, 10, 40, 56),
        },
        {
          id: 4,
          user: {
            id: 1,
            name: "Bagas",
            avatar: "https://i.pravatar.cc/",
          },
          description: "membuat projek",
          href: "/projects/1",
          createdAt: new Date(2024, 8, 10, 10, 40, 56),
        },
        {
          id: 5,
          user: {
            id: 1,
            name: "Bagas",
            avatar: "https://i.pravatar.cc/",
          },
          description: "membuat projek",
          href: "/projects/1",
          createdAt: new Date(2024, 8, 10, 10, 40, 56),
        },
        {
          id: 6,
          user: {
            id: 1,
            name: "Bagas",
            avatar: "https://i.pravatar.cc/",
          },
          description: "membuat projek",
          href: "/projects/1",
          createdAt: new Date(2024, 8, 10, 10, 40, 56),
        },
        {
          id: 7,
          user: {
            id: 1,
            name: "Bagas",
            avatar: "https://i.pravatar.cc/",
          },
          description: "membuat projek",
          href: "/projects/1",
          createdAt: new Date(2024, 8, 10, 10, 40, 56),
        },
        {
          id: 8,
          user: {
            id: 1,
            name: "Bagas",
            avatar: "https://i.pravatar.cc/",
          },
          description: "membuat projek",
          href: "/projects/1",
          createdAt: new Date(2024, 8, 10, 10, 40, 56),
        },
        {
          id: 9,
          user: {
            id: 1,
            name: "Bagas",
            avatar: "https://i.pravatar.cc/",
          },
          description: "membuat projek",
          href: "/projects/1",
          createdAt: new Date(2024, 8, 10, 10, 40, 56),
        },
        {
          id: 10,
          user: {
            id: 1,
            name: "Bagas",
            avatar: "https://i.pravatar.cc/",
          },
          description: "membuat projek",
          href: "/projects/1",
          createdAt: new Date(2024, 8, 10, 10, 40, 56),
        },
      ]);
    }, 1000)
  );
}
