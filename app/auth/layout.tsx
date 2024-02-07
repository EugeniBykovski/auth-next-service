const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full items-center justify-center bg-slate-800 text-white">
      {children}
    </div>
  );
};

export default AuthLayout;
