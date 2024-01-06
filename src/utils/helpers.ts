import { MONTHS } from "./constants"

export const formatDate = (date: string) => {
    const [year, monthStr, day] = date.split("-")
    const month = MONTHS[parseInt(monthStr) - 1]
    return `${day} ${month} ${year}`
}

export const formatWrestlerNames = (wrestlers:string[]) => {
    return wrestlers.join(" , ");
}