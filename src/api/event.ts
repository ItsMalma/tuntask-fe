import { User } from "./user";

export type Event = {
  id: number;
  name: string;
  description: string;
  startAt: Date;
  users: User[];
};

export async function getUpcomingEvents(): Promise<Event[]> {
  return new Promise((r) =>
    setTimeout(() => {
      r([
        {
          id: 1,
          name: "Conference on AI",
          description:
            "A comprehensive conference on the latest advancements in Artificial Intelligence.",
          startAt: new Date("2024-12-10T09:00:00"),
          users: [
            {
              id: 1,
              name: "John Doe",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 2,
              name: "Jane Smith",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 3,
              name: "Alice Brown",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 4,
              name: "Bob Johnson",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 5,
              name: "Charlie Lee",
              avatar: "https://i.pravatar.cc/",
            },
          ],
        },
        {
          id: 2,
          name: "Web Development Workshop",
          description:
            "An interactive workshop for beginners to learn web development.",
          startAt: new Date("2024-12-12T14:00:00"),
          users: [
            {
              id: 6,
              name: "David Martin",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 7,
              name: "Eva Clark",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 8,
              name: "Frank Harris",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 9,
              name: "Grace Walker",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 10,
              name: "Henry Scott",
              avatar: "https://i.pravatar.cc/",
            },
          ],
        },
        {
          id: 3,
          name: "Digital Marketing Seminar",
          description:
            "Learn the strategies and tools for effective digital marketing.",
          startAt: new Date("2024-12-15T10:00:00"),
          users: [
            {
              id: 11,
              name: "Isabella Adams",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 12,
              name: "Jack Taylor",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 13,
              name: "Liam Evans",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 14,
              name: "Mia Nelson",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 15,
              name: "Noah Green",
              avatar: "https://i.pravatar.cc/",
            },
          ],
        },
        {
          id: 4,
          name: "Startup Pitch Event",
          description:
            "Entrepreneurs pitch their startup ideas to potential investors.",
          startAt: new Date("2024-12-20T16:00:00"),
          users: [
            {
              id: 16,
              name: "Olivia Perez",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 17,
              name: "Paul Mitchell",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 18,
              name: "Quinn Robinson",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 19,
              name: "Riley Campbell",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 20,
              name: "Sophia Lee",
              avatar: "https://i.pravatar.cc/",
            },
          ],
        },
        {
          id: 5,
          name: "Tech Talk: The Future of Robotics",
          description:
            "A deep dive into the current trends and future predictions for robotics.",
          startAt: new Date("2024-12-25T11:00:00"),
          users: [
            {
              id: 21,
              name: "Tom Wilson",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 22,
              name: "Uma Kim",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 23,
              name: "Vera Harris",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 24,
              name: "William Walker",
              avatar: "https://i.pravatar.cc/",
            },
            {
              id: 25,
              name: "Xander Davis",
              avatar: "https://i.pravatar.cc/",
            },
          ],
        },
      ]);
    })
  );
}
