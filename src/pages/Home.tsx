// import { getDatabase } from "../libs/notion.js";
import { useEffect, useState } from "react";
import { fetchWorkData } from "../api/api";

const Home = () => {
  const [works, setWorks] = useState<[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchWorkData();
        const data = res.data.results;
        console.log("getData", data);
        setWorks(data);
      } catch (err) {
        console.error("Error:", err); // エラーハンドリング
      }
    };

    getData();
  }, []);

  useEffect(() => {
    console.log(works);
  }, [works]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">About</h2>
        <img className="w-[120px] rounded-full bg-slate-200 mb-[16px]" src="/person.svg" alt="" />
        <p className="mb-[16px]">towa</p>
        <p className="max-w-[340px] ">
          フロントエンドエンジニア。
          <br />
          1999年生まれ。沖縄県出身、東京都在住。大学時代に上京し、新卒で入社した会社でフロントエンドエンジニアとし��のキャリアを孤独にスタートしました。
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">Work</h2>
        <div className="flex flex-col gap-y-[24px]">
          {works.map((item) => (
            <div key={item.id} className="">
              <div className="max-w-[360px] mb-[12px]">
                <img
                  src={item.properties.CoverImage.files[0]?.file?.url || "/grayBox.svg"}
                  alt=""
                />
              </div>
              <p className="font-bold text-[20px] mb-[4px]">
                {item.properties.Title.title[0].plain_text}
              </p>
              <p className="text-[14px]">{item.properties.Summary.rich_text[0].plain_text}</p>
            </div>
          ))}
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

export default Home;
