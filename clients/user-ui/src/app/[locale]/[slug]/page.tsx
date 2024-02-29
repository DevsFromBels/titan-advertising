import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const DynamicProfile = dynamic(
  () => import("@/shared/pages/profile/profile-page")
);

export default function Page({ params }: { params: { slug: string } }) {
  if (!params.slug) redirect("/");

  return <DynamicProfile nickname={params.slug} />;
}
