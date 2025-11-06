export const SOLUTIONS = [
  {
    id: "watti",
    name: "WATTI",
  },
  {
    id: "save-e",
    name: "SAVE-E",
  },
  {
    id: "greenplanner",
    name: "GREEN PLANNER",
  },
  {
    id: "greenplanner-app",
    name: "GREEN PLANNER APP",
  },
  {
    id: "re-park",
    name: "RE:park",
  },
];

export interface ContactTypeInterface {
  id: string;
  name: string;
}

export const CONTACT_TYPE: ContactTypeInterface[] = [
  { id: "deployment", name: "도입 문의" },
  { id: "etc", name: "기타 문의" },
];

export const CONTACT_TYPE_EN: ContactTypeInterface[] = [
  { id: "deployment", name: "Introduction" },
  { id: "etc", name: "Other inquiries" },
];
