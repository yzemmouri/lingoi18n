'use client';

import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  const loggedIn = { firstName: 'Adrian' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and manage your accounts and transaction efficiently."
            user={loggedIn.firstName || 'Guest'}
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
      {/* <h1>{t('title')}</h1>
      <h3>{t('subTitle')}</h3> */}
    </section>
  );
}
