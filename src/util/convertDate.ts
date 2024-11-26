const convertDate = (published:string) => {
    const date: Date = new Date(published);

    const formattedDate: string = date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      
    return formattedDate;
}

export default convertDate