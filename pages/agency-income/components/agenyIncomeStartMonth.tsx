const currentDate = new Date();
const months = [];

for (let year = 2023; year <= currentDate.getFullYear(); year++) {
  const startMonth = year === 2023 ? 9 : 0; // October is 9 (0-indexed)
  const endMonth =
    year === currentDate.getFullYear() ? currentDate.getMonth() : 11;

  for (let month = startMonth; month <= endMonth; month++) {
    const monthYearString = `${year}-${String(month + 1).padStart(2, '0')}`;
    months.push(monthYearString);
  }
}

export const initialDate = {
  month: currentDate.getMonth(),
  year: currentDate.getFullYear()
};

export const monthsData = {
  months: months
};

const checkData = () => {
  return <></>;
};

export default checkData;
