const Blog = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">Blog</h2>
        <div>
          <div className="flex flex-col gap-y-[28px]">
            <div>
              <div className="max-w-[360px] mb-[12px]">
                <img src="/grayBox.svg" alt="" />
              </div>
              <p className="font-bold text-[20px] mb-[4px]">ReactHooks重要度</p>
              <p className="text-[14px]">2024/05/16</p>
            </div>
            <div>
              <div className="max-w-[360px] mb-[12px]">
                <img src="/grayBox.svg" alt="" />
              </div>
              <p className="font-bold text-[20px] mb-[4px]">このページについて</p>
              <p className="text-[14px]">2024/05/16</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
