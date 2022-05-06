import React, { FC, ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';

const PageLayout: FC<{ children: ReactNode | ReactNode[]; tags?: any; query?: any }> = ({
  children,
  tags,
  query,
}) => {
  return (
    <>
      <Header tags={tags} query={query} />

      {children}

      <Footer />
    </>
  );
};

export default PageLayout;
