import styled from "styled-components";
import { expense } from "../types/expense";
import { useMemo } from "react";
import { CategoryIcon } from "./CategoryIcon";
import { useCategories } from "../hooks/useCategories";
import { Spinner } from "../../../components/Spinner";
import { formattedAmount } from "../utils/expenseUtils";
import { caretDown, caretUp } from "../../../components/icons/Carets";

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
    let positiveAmount = 0;
    let expendedAmount = 0;

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

        category === "salary"
          ? (positiveAmount += amount)
          : (expendedAmount += amount);

        if (amount > 0) {
          return (
            <TotalDisplay key={category}>
              <CategoryIcon category={category} size="medium" />
              <TotalDisplayFieldWrapper>
                <TotalDisplayTextField>{category} </TotalDisplayTextField>
                <TotalDisplayAmountField>
                  {formattedAmount(amount)}
                </TotalDisplayAmountField>
              </TotalDisplayFieldWrapper>
            </TotalDisplay>
          );
        }
      }
    );

    return (
      <>
        <PositiveAmount>
          {caretUp} {formattedAmount(positiveAmount - expendedAmount)}
        </PositiveAmount>
        <NegativeAmount>
          {caretDown} {formattedAmount(expendedAmount)}
        </NegativeAmount>
        <ExpensesSummaryWrapper>{fields}</ExpensesSummaryWrapper>
      </>
    );
  }, [expenses, systemCategories]);

  if (isLoading) {
    return <Spinner />;
  }

  return entries;
}

const ExpensesSummaryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

const TotalDisplay = styled.div`
  display: flex;
  padding: 10px 20px;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
`;

const TotalDisplayTextField = styled.p`
  padding-top: 10px;
  font-size: 1.1rem;
  text-transform: uppercase;
`;
const TotalDisplayAmountField = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
`;

const TotalDisplayFieldWrapper = styled.div`
  text-align: center;
  width: 100px;
`;

const PositiveAmount = styled.span`
  color: var(--color-green-700);
  font-size: var(--font-size-sm);
  margin: 0 10px;
`;
const NegativeAmount = styled.span`
  color: var(--color-red-700);
  font-size: var(--font-size-sm);
`;
