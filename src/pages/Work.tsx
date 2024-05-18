const Work = () => {
  // const [workItems, setWorkItems] = useState();

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">Work</h2>
        <div className="flex flex-col gap-y-[28px]">
          <div>
            <div className="max-w-[360px] mb-[12px]">
              <img src="/grayBox.svg" alt="" />
            </div>
            <p className="font-bold text-[20px] mb-[4px]">Vird（β版）</p>
            <p className="text-[14px]">歌詞カードをweb上で作成できるサ4ビス</p>
          </div>
          <div>
            <div className="max-w-[360px] mb-[12px]">
              <img src="/grayBox.svg" alt="" />
            </div>
            <p className="font-bold text-[20px] mb-[4px]">Vird（β版）</p>
            <p className="text-[14px]">歌詞カードをweb上で作成できるサービス</p>
          </div>
          <div>
            <div className="max-w-[360px] mb-[12px]">
              <img src="/grayBox.svg" alt="" />
            </div>
            <p className="font-bold text-[20px] mb-[4px]">Vird（β版）</p>
            <p className="text-[14px]">歌詞カードをweb上で作成できるサービス</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
