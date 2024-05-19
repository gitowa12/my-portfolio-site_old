import { Link } from "react-router-dom";

const Work = () => {
  // const [workItems, setWorkItems] = useState();
  const items = [
    { id: 1, title: "Vird", contents: "歌詞カードをweb上で作成できるサ4ビス" },
    { id: 2, title: "営業日計算プラグイン", contents: "kintoneで営業日計算をします。" },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[32px] mb-[64px]">
        <h2 className="text-[40px] font-bold mb-[32px]">Work</h2>
        <div className="flex flex-col gap-y-[28px]">
          {items.map((item) => (
            <Link to={`/work/${item.id}`}>
              <div className="max-w-[360px] mb-[12px]">
                <img src="/grayBox.svg" alt="" />
              </div>
              <p className="font-bold text-[20px] mb-[4px]">{item.title}</p>
              <p className="text-[14px]">{item.contents}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
