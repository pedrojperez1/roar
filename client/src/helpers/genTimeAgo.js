import dayjs from "dayjs";

const genTimeAgo = (unixString) => {
    const created = dayjs.unix(Number(unixString) / 1000);
    const dateDiffSeconds = dayjs().diff(created, "second");
    if (dateDiffSeconds > (60 * 60 * 24 * 30)) {
        const diff = Math.floor(dateDiffSeconds / (60 * 60 * 24 * 30));
        return `${diff} month${diff !== 1 ? 's' : ''} ago`
    }
    if (dateDiffSeconds > (60 * 60 * 24)) {
        const diff = Math.floor(dateDiffSeconds / (60 * 60 * 24));
        return `${diff} day${diff !== 1 ? 's' : ''} ago`
    }
    if (dateDiffSeconds > (60 * 60)) {
        const diff = Math.floor(dateDiffSeconds / (60 * 60));
        return `${diff} hour${diff !== 1 ? 's' : ''} ago`
    }
    if (dateDiffSeconds > (60)) {
        const diff = Math.floor(dateDiffSeconds / 60);
        return `${diff} min${diff !== 1 ? 's' : ''} ago`
    }
    return `${dateDiffSeconds} seconds ago`
}

export default genTimeAgo;