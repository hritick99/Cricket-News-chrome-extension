async function getMatchData()
{
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=0aa01bc0-f975-4a48-834e-55f1645c4c2f&offset=0")
    .then(data=>data.json())
    .then(data=>{
        if(data.status!="success") return;

        const matchesList=data.data;

        if(!matchesList) return[];

        const relevantData=matchesList.map(match=> `${match.name},${match.status}`);
        document.getElementById("matches").innerHTML=relevantData.map(match =>`<li>${match}</li>`).join('');

        return relevantData;
    })
    .catch(e => console.log(e));
}

getMatchData();