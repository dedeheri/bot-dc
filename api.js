const axios = require("axios");

async function getBookies() {
  try {
    const bookies = await axios.get("http://localhost:1232/api/bookies");

    //   maping api as sting
    let data = "";
    bookies.data.result.map((d, i) => {
      data += i + 1 + ". " + d.name + " : " + d.handphone + "\n";
    });

    //  return data as string
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getReference() {
  try {
    const response = await axios.get("http://localhost:1232/api/reference");

    let data = [];
    response.data.result.map((res) => {
      data.push(res.image);
    });

    const result = { files: data };

    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getBookies, getReference };
