import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
      <div className="max-w-md mx-auto">
        <ItemList />
      </div>
    </main>
  );
}