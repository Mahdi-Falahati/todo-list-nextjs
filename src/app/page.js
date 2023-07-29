import Todo from "@/components/Todo";

export default function Home() {
  const handleAddTodo = (data) => {
    console.log('Todo:', data.todo);
    // Perform your logic to add the todo
  };
  return (
    <main>
      <Todo/>
    </main>
  );
}
