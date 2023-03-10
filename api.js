require("dotenv").config();

const axios = require("axios");
const url = process.env.BASE_URL;

async function getBookies() {
  try {
    const bookies = await axios.get(`${url}/api/bookies`);

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
    const response = await axios.get(`${url}/api/reference`);

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
