import styled from "styled-components";
import { expense } from "../types/expense";
import { useMemo } from "react";
import { CategoryIcon } from "./CategoryIcon";
import { useCategories } from "../hooks/useCategories";
import { Spinner } from "../../../components/Spinner";
import { formattedAmount } from "../utils/expenseUtils";

interface Props {
  expenses: expense[];
}

interface amounts {
  [category: string]: number;
}

export function ExpensesSummary({ expenses }: Props) {
  const { categories: systemCategories, isLoading } = useCategories();

  const entries = useMemo(() => {
    const amountsPerCategory: amounts = Object.create(null);

    if (systemCategories) {
      systemCategories.forEach((cat) => {
        if (cat.active) amountsPerCategory[cat.category] = 0;
      });
    }

    expenses.forEach((exp) => {
      amountsPerCategory[exp.category]
        ? (amountsPerCategory[exp.category] += exp.amount)
        : (amountsPerCategory[exp.category] = exp.amount);
    });

    const fields = Object.entries(amountsPerCategory).map(
      ([category, amount]) => {
        if (!systemCategories?.find((syscat) => syscat.category === category)) {
          return;
        }
        return (
          <TotalDisplay key={category}>
            <CategoryIcon category={category} size="medium" />
            <TotalDisplayFieldWrapper>
              <TotalDisplayAmountField>
                {formattedAmount(amount)}
              </TotalDisplayAmountField>
              <TotalDisplayTextField>{category} </TotalDisplayTextField>
            </TotalDisplayFieldWrapper>
          </TotalDisplay>
        );
      }
    );

    return fields;
  }, [expenses, systemCategories]);

  if (isLoading) {
    return <Spinner />;
  }

  return <ExpensesSummaryWrapper>{entries}</ExpensesSummaryWrapper>;
}

const ExpensesSummaryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 70px 0;
  gap: 10px;
`;

const TotalDisplay = styled.div`
  display: flex;
  padding: 20px;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
`;

const TotalDisplayTextField = styled.p`
  padding-top: 10px;
  font-style: italic;
  font-size: 1.2rem;
`;
const TotalDisplayAmountField = styled.p`
  font-weight: bold;
`;

const TotalDisplayFieldWrapper = styled.div`
  text-align: center;
  width: 100px;
`;
