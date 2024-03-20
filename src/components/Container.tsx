import clsx from 'clsx';

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={clsx(`max-w-7xl mx-auto px-10 py-20`, className)}>{children}</div>;
};

export default Container;
