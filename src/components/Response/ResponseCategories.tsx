import { useAppContext } from "@/contexts/AppContext";
import { CategoryCard } from "../custom";
import { Skeleton } from "../ui/skeleton";
import { Link } from "react-router-dom";

export default function ResponseCategories() {
  const { categories, fetchingCategories } = useAppContext();
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between text-lg">
        <p className="text-subtle_text">Categories</p>

        <Link to="/response/all-categories" className="underline text-dark">
          See all
        </Link>
      </div>

      <div className="grid grid-cols-5 gap-5">
        {fetchingCategories
          ? Array.from({ length: 8 }).map((_, i) => (
              <Skeleton
                key={i}
                className="w-full h-20 bg-slate-200 rounded-xl"
              />
            ))
          : categories &&
            categories.map((category) => <CategoryCard category={category} />)}
      </div>
    </div>
  );
}
