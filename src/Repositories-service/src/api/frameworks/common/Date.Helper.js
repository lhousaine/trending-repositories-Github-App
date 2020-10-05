export default function PriorDateHelper(daysNumber) {
    const priorDate = new Date();
    priorDate.setDate(priorDate.getDate() - daysNumber);
    const dd = priorDate.getDate() > 9 ? priorDate.getDate() : `0${priorDate.getDate()}`;

    const mm = priorDate.getMonth() + 1 > 9 ? priorDate.getMonth() + 1 : `0${`${priorDate.getMonth() + 1}`}`;
    const yyyy = priorDate.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
}
