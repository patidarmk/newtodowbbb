import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus } from "lucide-react";
import { MadeWithApplaa } from "@/components/made-with-applaa";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Explore modern UI patterns", completed: true },
    { id: 2, text: "Build a beautiful To-Do App", completed: false },
    { id: 3, text: "Learn about glassmorphism", completed: true },
    { id: 4, text: "Deploy the app to production", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([newTodoItem, ...todos]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm shadow-2xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-2">
              My To-Do List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-6">
              <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What needs to be done?"
                className="flex-grow text-lg p-4 rounded-lg h-12"
              />
              <Button onClick={addTodo} className="p-4 rounded-lg bg-blue-600 hover:bg-blue-700 h-12">
                <Plus className="h-6 w-6" />
              </Button>
            </div>
            <ul className="space-y-3">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                    todo.completed ? "bg-green-100 dark:bg-green-900/50" : "bg-card"
                  }`}
                >
                  <Checkbox
                    id={`todo-${todo.id}`}
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                    className="mr-4 h-6 w-6"
                  />
                  <label
                    htmlFor={`todo-${todo.id}`}
                    className={`flex-grow text-lg cursor-pointer ${
                      todo.completed ? "line-through text-gray-500" : "text-card-foreground"
                    }`}
                  >
                    {todo.text}
                  </label>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900/50 rounded-full"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <MadeWithApplaa />
      </div>
    </div>
  );
};

export default Todo;