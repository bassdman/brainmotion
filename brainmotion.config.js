import { FilterAllNeighboursStrategy } from "./src/strategies/filterNeighbours/all";
import { FilterNotVisitedNeighboursStrategy } from "./src/strategies/filterNeighbours/notVisited";

const config = {
    strategies: {
        filterNeighbours: [FilterAllNeighboursStrategy, FilterNotVisitedNeighboursStrategy]
    }
}

export { config }