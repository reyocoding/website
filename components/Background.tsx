const Background = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 [background-image:linear-gradient(rgba(167,139,250,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
    <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
    <div className="absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-fuchsia-600/15 blur-[120px]" />
    <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-violet-800/20 blur-[120px]" />
  </div>
);

export default Background;