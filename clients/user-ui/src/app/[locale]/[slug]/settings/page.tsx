import SettingsPage from "@/shared/pages/settings.page";
import { redirect } from 'next/navigation'

export default function Page({ params }: { params: { slug: string } }) {
  if(!params) {
    redirect('/')
  }

  return <SettingsPage nickname={params.slug} />
}