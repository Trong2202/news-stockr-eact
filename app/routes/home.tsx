import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "News StockR - Tin tức & Chứng khoán" },
    { name: "description", content: "Nền tảng theo dõi tin tức và thị trường chứng khoán thông minh" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  // An toàn khi chạy local (không có Cloudflare env)
  const message = (context as any)?.cloudflare?.env?.VALUE_FROM_CLOUDFLARE ?? undefined;
  return { message };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
