import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Week 5: New Item Form
      </h1>
      <NewItem />
    </main>
  );
}
