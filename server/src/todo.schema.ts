export interface TodoSchema {
  operation: "add" | "remove" | "change";
  todo: Todo;
}

interface Todo {
  id: string;
  title: string;
  content: string;
}
