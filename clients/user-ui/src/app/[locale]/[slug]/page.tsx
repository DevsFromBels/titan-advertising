import ProfilePage from "@/pages/profile/profile-page";

export default function Page({ params }: { params: { slug: string } }) {
  return <ProfilePage nickname={params.slug} />
}