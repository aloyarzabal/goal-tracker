import { useSearchParams } from "react-router-dom";
import Filter from "../../../components/Filter";
import { months, todaysMonthName } from "../../../utils/formatDate";

export default function MonthFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedMonth = searchParams.get("month") || todaysMonthName();

  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.target.value;
    searchParams.set("month", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const monthOptions = Object.values(months).map((month) => ({
    name: month,
    value: month,
  }));
  return (
    <Filter
      defaultValue={selectedMonth}
      handleChange={handleChange}
      options={monthOptions}
    />
  );
}
