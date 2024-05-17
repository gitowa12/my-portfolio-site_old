import React from "react";

const About = () => {
  return (
    <>
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
    </>
  );
};

export default About;
