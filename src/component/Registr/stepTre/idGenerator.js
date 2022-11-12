function idGenerator ()  {
    return Math.floor((1 + Math.random()) * 0x100000)
        .toString(16)
        .substring(1);
}
export  {idGenerator};