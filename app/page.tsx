import { redirect } from "next/navigation";

const MainPage = () => {
  // TODO: Add authentication check

  redirect("/allBookmarks");

  return (
    <main className="min-h-screen p-3">
      <div className="">Main Page maybe temp</div>
    </main>
  );
};

export default MainPage;
