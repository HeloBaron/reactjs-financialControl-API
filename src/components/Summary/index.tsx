import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummeryCard } from "./styles";

export function Summary() {
    return (
        <SummaryContainer>
            <SummeryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummeryCard>

            <SummeryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummeryCard>

            <SummeryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummeryCard>
        </SummaryContainer>
    )
}