import styled from "styled-components";
import { ExpenseCategory, expense } from "../types/expense";
import { useMemo } from "react";
import { Icon } from "./Icon";
import { allSystemCategories } from "../utils/expenseUtils";

interface Props {
  expenses: expense[];
}

interface amounts {
  [category: string]: number;
}

export function ExpensesSummary({ expenses }: Props) {
  const entries = useMemo(() => {
    const systemCategories = allSystemCategories();

    const amountsPerCategory: amounts = Object.create(null);

    expenses.forEach((exp) => {
      amountsPerCategory[exp.category]
        ? (amountsPerCategory[exp.category] += exp.amount)
        : (amountsPerCategory[exp.category] = exp.amount);
    });

    const fields = Object.entries(amountsPerCategory).map(
      ([category, amount]) => {
        if (!systemCategories.find((syscat) => syscat === category)) {
          return;
        }
        return (
          <TotalDisplay key={category}>
            <Icon category={category as ExpenseCategory} size="medium" />
            <TotalDisplayFieldWrapper>
              <TotalDisplayAmountField>{amount}</TotalDisplayAmountField>
              <TotalDisplayTextField>{category} </TotalDisplayTextField>
            </TotalDisplayFieldWrapper>
          </TotalDisplay>
        );
      },
    );

    return fields;
  }, [expenses]);

  return <ExpensesSummaryWrapper>{entries}</ExpensesSummaryWrapper>;
}

const ExpensesSummaryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 70px 0;
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
