import { $formatNumber } from "@/utils/common";
export const TYPES = [
    {
        name: "배달의민족",
        img: "/img/logoBaemin.png",
    },
    {
        name: "요기요",
        img: "/img/logoYogiyo.png",
    },
    {
        name: "쿠팡이츠",
        img: "/img/logoCoupang.png",
    },
    {
        name: "배달특급",
        img: "/img/logoSpecial.png",
    },
];

export const FIELDS = [
    {
        name: "date",
        formatValue(value) {
            return value;
        },
    },
    {
        name: "cate",
        formatValue(value) {
            return value;
        },
    },
    {
        name: "value",
        formatValue(value) {
            return `${$formatNumber(value)}원`;
        },
    },
    {
        name: "amount",
        formatValue(value) {
            return `${$formatNumber(value)}건`;
        },
    },
    {
        name: "title",
        formatValue(value) {
            return value;
        },
    },
];
