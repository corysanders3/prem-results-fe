interface PremResults {
    seasonEndYear: number,
    team: string,
    rank: number,
    matchesPlayed: number,
    wins: number,
    draws: number,
    losses: number,
    goalsFor: number,
    goalsAgainst: number,
    goalDifference: number,
    points: number,
    notes: string
};

interface StandingsProps {
    results: PremResults[]
};

interface Property {
    seasonEndYear: number,
    team: string
};

interface SelectOptions {
    field: string | number
};

interface TableLayout {
    data: PremResults,
    year?: string
};

interface TopMoments {
    name: string,
    year: number,
    story: string,
    link: string,
    image: string
}

interface GoalsLayout {
    name: string,
    club: string,
    place: number,
    goals: number,
    image: string
}

interface GoalsGameLayout {
    seasonEndYear: string,
    goals: GoalsLayout[]
}

interface PlayersProps {
    goals: GoalsGameLayout[]
}

export type { PremResults, StandingsProps, Property, SelectOptions, 
    TableLayout, TopMoments, GoalsGameLayout, PlayersProps
};