export default function Page() {
  return <div>The page inside Parallel Routes</div>;
}

/* 
if don't want to get 404 error on Hard Navigation, we need to add default.tsx in:
1. parallel_routes/@authModal/
2. parallel_routes/@dashboard/
3. parallel_routes/@feeds/
 */
