// const mapMonth = {
//     "01": "Januari",
//     "02": "Februari",
//     "03": "Maret",
//     "04": "April",
//     "05": "Mei",
//     "06": "Juni",
//     "07": "Juli",
//     "08": "Agustus",
//     "09": "September",
//     "10": "Oktober",
//     "11": "November",
//     "12": "Desember",
// }


const convertDate = (published:string) => {
  const [year, month, date] = published.substring(0,10).split('-')    
  console.log(typeof month)
  return `${date} ${month} ${year}`
}

export default convertDate