const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="skeleton h-10 w-10 rounded-full shrink-0 bg-slate-700" />
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-40 bg-slate-700" />
          <div className="skeleton h-4 w-40 bg-slate-700" />
        </div>
      </div>
      <div className="mt-3 mb-3 flex gap-3 justify-end items-center">
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-40 bg-slate-700" />
        </div>
        <div className="skeleton w-10 h-10 rounded-full shrink-0 bg-slate-700" />
      </div>
    </>
  );
};

export default MessageSkeleton;
