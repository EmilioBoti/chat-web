import dayjs from "dayjs"


/**
 * 
 * @param {*} value
 * @returns a String with the first letter capitale
 */

export const formatName = (value) => {
    return value.replace(value[0], value[0].toUpperCase())
}

export const formetDate = (date) => {
    return dayjs(date).format("H:mm a")
}