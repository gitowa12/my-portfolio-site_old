const TopPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">About</h2>
        <img className="w-[120px] rounded-full bg-slate-200 mb-[16px]" src="/person.svg" alt="" />
        <p className="mb-[16px]">towa</p>
        <p className="max-w-[340px] ">
          フロントエンドエンジニア。
          <br />
          1999年生まれ。沖縄県出身、東京都在住。大学時代に上京し、新卒で入社した会社でフロントエンドエンジニアとしてのキャリアを孤独にスタートしました。
        </p>
      </div>
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
    </div>
  );
};

export default TopPage;
