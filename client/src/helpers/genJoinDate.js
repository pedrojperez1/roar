import dayjs from "dayjs";

const genJoinDate = (unixString) => {
    const joined = dayjs.unix(Number(unixString) / 1000);
    return joined.format("MMMM YYYY");
};

export default genJoinDate;