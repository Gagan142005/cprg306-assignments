import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
    
      <h1 className="text-3xl font-bold text-white mb-6">
        Week 5 — New Item
      </h1>
      <NewItem />
    </main>
  );
}

