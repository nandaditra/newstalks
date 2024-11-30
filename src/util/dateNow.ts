function dateNow():string {
    return new Date().toJSON().slice(0,10);
}

export default dateNow