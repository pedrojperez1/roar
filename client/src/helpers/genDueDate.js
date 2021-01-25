import dayjs from "dayjs";

function genDueDate(levelCode) {
    switch (levelCode) {
        case "l1":
            return dayjs();
        case "l2":
            return dayjs().add(1, "week");
        case "l3":
            return dayjs().add(2, "week");
        case "l4":
            return dayjs().add(3, "week");
        case "l5":
            return dayjs().add(4, "week");
        case "l6":
            return dayjs().add(5, "week");
        case "l7":
            return dayjs().add(6, "week");
        case "l8":
            return dayjs().add(7, "week");
        default:
            throw new Error('Invalid level code provided to function.');
    }
};

export default genDueDate;