// components/Layout.tsx
import React, {ReactNode} from 'react';
import Head from 'next/head';

const Layout: React.FC<{ title: string; description?: string }> = ({ title, description, children: {{children: ReactNode}} }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Add other common meta tags here */}
      </Head>
      {children}
    </div>
  );
};

export default Layout;
