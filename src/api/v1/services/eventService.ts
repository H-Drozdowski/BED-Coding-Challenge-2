export function getPopularityTier(registrationCount : number, capacity : number) : any {
    var popularityScore = (registrationCount / capacity) * 100
    var popularityTier = ""

    if (popularityScore > 89){
        popularityTier = "Hot"
    }
    else if(popularityScore > 69){
        popularityTier = "Popular"
    }
    else if(popularityScore > 49){
        popularityTier = "Moderate"
    }
    else if(popularityScore >= 25){
        popularityTier = "Building"
    }
    else{
        popularityTier = "New"
    }

    return {popularityScore, popularityTier}
}