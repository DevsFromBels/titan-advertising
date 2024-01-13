import SettingsPage from "@/pages/settings.page";

export default function Page({ params }: { params: { slug: string } }) {
  return <SettingsPage nickname={params.slug} />
}