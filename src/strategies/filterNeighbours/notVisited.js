const FilterNotVisitedNeighboursStrategy = {
    run: function run(neighbours) {
        return neighbours.filter(p => !p.visited && p.type !== 'start')
    },
    name: 'notVisited',
    text: 'Alle Nachbarn, die noch nicht besucht wurden'
}

export {
    FilterNotVisitedNeighboursStrategy
}