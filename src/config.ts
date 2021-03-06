import { format } from "util";  


export const create_uuid = (min: number = 1000, max: number = 9000): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const isEmpty = (arr: []) => !Array.isArray(arr) || arr.length === 0;


export const date_fmt = (date: string = Date(), formatStr: string = "dd/MM/yyyy"): string => {
    return format(new Date(date), formatStr);
};

export const date_fmt_back = (date: string, formatStr: string = "yyyy-MM-dd"): any => {
    const newDate = date.split("/");

    const day = Number(newDate[0]);
    const month = Number(newDate[1]) - 1;
    const year = Number(newDate[2]);

    return format(new Date(year, month, day), formatStr);
};

export const ageFromDateOfBirthday = (dateOfBirth: string): number => {
    const today = new Date();

    const newDateOfBirth = dateOfBirth.split("/");

    const day = Number(newDateOfBirth[0]);
    const month = Number(newDateOfBirth[1]);
    const year = Number(newDateOfBirth[2]);

    const birthDate = new Date(year, month, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};