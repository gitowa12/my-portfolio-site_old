import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-[32px] mb-[64px]">
        <div className="flex flex-col items-center mb-[32px]">
          <h2 className="text-[40px] font-bold mb-[32px]">About</h2>
          <img className="w-[120px] rounded-full bg-slate-200 mb-[16px]" src="/person.svg" alt="" />
          <p className="mb-[16px]">towa</p>
          <p className="max-w-[340px] ">
            フロントエンドエンジニア。
            <br />
            1999年生まれ。沖縄県出身、東京都在住。大学時代に上京し、新卒で入社した会社でフロントエンドエンジニアとしてのキャリアを孤独にスタートしました。
          </p>
        </div>
        <div className="w-full max-w-[340px] flex flex-col items-center">
          <h3 className="text-[32px] font-bold mb-[16px]">Skills</h3>
          <div className="w-full flex flex-col justify-between">
            <div>
              <p className="text-center font-bold text-[18px]">言語</p>
              <ul className="flex flex-col space-y-[4px]">
                <li className="flex justify-between">
                  <p className="text-[12px] font-bold">技術</p>
                  <p className="text-[12px] font-bold">使用期間</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[4px]">
                  <p>HTML・CSS</p>
                  <p>1年</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[4px]">
                  <p>JavaScript</p>
                  <p>1年</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[4px]">
                  <p>TypeScript</p>
                  <p>3月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[4px]">
                  <p>React</p>
                  <p>7月</p>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-center font-bold text-[18px]">資格</p>
              <ul className="flex flex-col space-y-[4px]">
                <li className="flex justify-between">
                  <p className="text-[12px] font-bold">資格</p>
                  <p className="text-[12px] font-bold">取得時期</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[4px]">
                  <p>CCNA</p>
                  <p></p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[4px]">
                  <p>基本情報技術者</p>
                  <p></p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[4px]">
                  <p>ITパスポート</p>
                  <p>1年</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[4px]">
                  <p>英語検定2級</p>
                  <p>1年</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
