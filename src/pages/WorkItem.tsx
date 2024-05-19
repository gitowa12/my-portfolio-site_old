import { useParams } from "react-router-dom";

const WorkItem = () => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <div>WorkItem</div>
      <p>{params.id}</p>
    </>
  );
};

export default WorkItem;
