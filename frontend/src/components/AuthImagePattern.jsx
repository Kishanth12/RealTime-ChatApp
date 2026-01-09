const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-bounce" />
      </div>

      {/* Content */}
      <div className="max-w-md text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-primary drop-shadow-md">
          {title}
        </h2>
        <p className="text-base-content/70 text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
