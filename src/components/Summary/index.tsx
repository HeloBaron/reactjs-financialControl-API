import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";
import { SummaryContainer, SummeryCard } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const summay = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'income') {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }

            return acc;
        }, 
        { income: 0, 
          outcome: 0, 
          total: 0
        }) 

    return (
        <SummaryContainer>
            <SummeryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>{priceFormatter.format(summay.income)}</strong>
            </SummeryCard>

            <SummeryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>{priceFormatter.format(summay.outcome)}</strong>
            </SummeryCard>

            <SummeryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>{priceFormatter.format(summay.total)}</strong>
            </SummeryCard>
        </SummaryContainer>
    )
}