import { Color } from "@/libs/color";
import { Task } from "./task";

export type Project = {
  id: number;
  image: string;
  name: string;
  tasks: Task[];
  messages: number;
  dueDate: Date;
  color: Color;
};

export async function getPendingProjects(): Promise<Project[]> {
  return new Promise((r) =>
    setTimeout(() => {
      r([
        {
          id: 1,
          image: "/project.png",
          name: "Project A",
          tasks: [
            {
              id: 1,
              title: "Task 1",
              description: "This is the first task in Project A.",
              completeDate: null,
              dueDate: new Date("2024-12-10T10:00:00Z"),
              tags: [
                {
                  id: 1,
                  name: "Urgent",
                  color: "pink",
                },
                {
                  id: 2,
                  name: "Design",
                  color: "cyan",
                },
              ],
            },
            {
              id: 2,
              title: "Task 2",
              description: "This is the second task in Project A.",
              completeDate: new Date("2024-12-12T10:00:00Z"),
              dueDate: new Date("2024-12-12T10:00:00Z"),
              tags: [
                {
                  id: 3,
                  name: "Development",
                  color: "green",
                },
                {
                  id: 4,
                  name: "Testing",
                  color: "yellow",
                },
              ],
            },
          ],
          messages: 5,
          dueDate: new Date(2024, 11, 15),
          color: "green",
        },
        {
          id: 2,
          image: "/project.png",
          name: "Project B",
          tasks: [
            {
              id: 3,
              title: "Task 1",
              description: "This is the first task in Project B.",
              completeDate: null,
              dueDate: new Date("2024-12-20T10:00:00Z"),
              tags: [
                {
                  id: 5,
                  name: "Urgent",
                  color: "pink",
                },
              ],
            },
            {
              id: 4,
              title: "Task 2",
              description: "This is the second task in Project B.",
              completeDate: null,
              dueDate: new Date("2024-12-22T10:00:00Z"),
              tags: [
                {
                  id: 6,
                  name: "Documentation",
                  color: "pink",
                },
                {
                  id: 7,
                  name: "Release",
                  color: "yellow",
                },
              ],
            },
          ],
          messages: 3,
          dueDate: new Date(2024, 11, 25),
          color: "yellow",
        },
      ]);
    })
  );
}
