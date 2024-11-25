import { Tag } from "@/api/tag";

export type Task = {
  id: number;
  title: string;
  description: string;
  completeDate: Date | null;
  dueDate: Date;
  tags: Tag[];
};

export async function getDueTasks(): Promise<Task[]> {
  return new Promise((r) =>
    setTimeout(() => {
      r([
        {
          id: 1,
          title: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi lacus, euismod vitae risus non, facilisis euismod libero.",
          completeDate: null,
          dueDate: new Date(2024, 11, 11, 11, 11, 11),
          tags: [{ id: 1, name: "Lorem", color: "green" }],
        },
        {
          id: 2,
          title: "Task Meeting",
          description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ut tristique sapien.",
          completeDate: null,
          dueDate: new Date(2024, 10, 5, 9, 0, 0),
          tags: [
            { id: 2, name: "Urgent", color: "pink" },
            { id: 3, name: "Meeting", color: "cyan" },
          ],
        },
        {
          id: 3,
          title: "Design Mockup",
          description:
            "Curabitur ac risus volutpat, venenatis ante sed, fermentum erat. Nunc vel dolor et ante suscipit malesuada.",
          completeDate: null,
          dueDate: new Date(2024, 9, 15, 15, 30, 0),
          tags: [{ id: 4, name: "Design", color: "yellow" }],
        },
        {
          id: 4,
          title: "Code Review",
          description:
            "Aliquam erat volutpat. Morbi ultricies risus quis lectus venenatis, vitae posuere lectus vehicula.",
          completeDate: null,
          dueDate: new Date(2024, 7, 20, 10, 45, 0),
          tags: [{ id: 6, name: "Review", color: "yellow" }],
        },
        {
          id: 5,
          title: "Prepare Presentation",
          description:
            "Donec interdum, ligula eget facilisis suscipit, augue dui cursus arcu, in bibendum felis sapien non tortor.",
          completeDate: null,
          dueDate: new Date(2024, 9, 30, 12, 0, 0),
          tags: [{ id: 7, name: "Preparation", color: "green" }],
        },
      ]);
    })
  );
}
