import dayjs from "dayjs";

const FULL_DATE_TIME_FORMAT = "HH:mm:ss DD.MM.YYYY";
const FULL_DATE_FORMAT = "DD.MM.YYYY";


function DateConverter() {
    this.toFullDateTime = (iso) => dayjs(iso).format(FULL_DATE_TIME_FORMAT);
    this.toFullDate = (iso) => dayjs(iso).format(FULL_DATE_FORMAT);
}

export default DateConverter;