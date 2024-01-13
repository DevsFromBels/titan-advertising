import Link from 'next/link';
import {Button} from "@/shared/components/ui/button";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="flex h-[calc(100vh_-_3rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>

        <p className="mt-2 text-2xl">{t('message')}.</p>

        <Link href="/">
          <Button className="mt-6">{t('buttonText')}</Button>
        </Link>
      </div>
    </div>
  );
}