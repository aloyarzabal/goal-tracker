import { useSearchParams } from "react-router-dom";
import Filter from "../../../components/Filter";
import { todaysYear } from "../../../utils/formatDate";

export default function YearFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedYear = searchParams.get("year") || todaysYear();

  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.target.value;
    searchParams.set("year", value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const yearOptions = [
    { name: 2021, value: 2021 },
    { name: 2022, value: 2022 },
    { name: 2023, value: 2023 },
    { name: 2024, value: 2024 },
    { name: 2025, value: 2025 },
    { name: 2026, value: 2026 },
  ];
  return (
    <Filter
      defaultValue={selectedYear}
      handleChange={handleChange}
      options={yearOptions}
    />
  );
}
