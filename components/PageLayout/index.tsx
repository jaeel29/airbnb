import React, { FC, ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';

const PageLayout: FC<{ children: ReactNode | ReactNode[]; tags?: boolean }> = ({
  children,
  tags,
}) => {
  return (
    <>
      <Header tags={tags} />

      {children}

      <Footer />
    </>
  );
};

export default PageLayout;
