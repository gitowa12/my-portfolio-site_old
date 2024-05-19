export const fetchWorkData = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/database`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    console.log("fetchData", result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
