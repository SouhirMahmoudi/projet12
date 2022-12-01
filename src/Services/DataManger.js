
async function getUserInfos(idUser){
    
const result= await fetch("/DataMocked.json")
const data = await result.json()
    return data.USER_MAIN_DATA.find((elt) => elt.id === parseInt(idUser));
   
}

async function getUserActivity(idUser){
    const result= await fetch("/DataMocked.json")
    const data = await result.json()
    return data.USER_ACTIVITY.find((elt) => elt.userId === parseInt(idUser));
}

async function getUserAVerageSessions(idUser){
    const result= await fetch("/DataMocked.json")
    const data = await result.json()
    const dataFinal= data.USER_AVERAGE_SESSIONS.find((elt) => elt.userId === parseInt(idUser));
   const formatData = dataFinal.sessions.map((elm) => {
    switch (elm.day) {
      case 1:
        return { ...elm, day: "L" };
      case 2:
        return { ...elm, day: "M" };
      case 3:
        return { ...elm, day: "M" };
      case 4:
        return { ...elm, day: "J" };
      case 5:
        return { ...elm, day: "V" };
      case 6:
        return { ...elm, day: "S" };
      case 7:
        return { ...elm, day: "D" };
      default:
        return { ...elm };
    }
  })
  
  return formatData;
  
} 


async function getUserPerformance(idUser){
    const result= await fetch("/DataMocked.json")
    const data = await result.json()
    const dataF= data.USER_PERFORMANCE.find((elt) => elt.userId === parseInt(idUser));
    const dataFormat= dataF.data.map((data) => {
        switch (data.kind) {
            case 1:
                return { ...data, kind: 'Cardio' };
            case 2:
                return { ...data, kind: 'Energie' };
            case 3:
                return { ...data, kind: 'Endurance' };
            case 4:
                return { ...data, kind: 'Force' };
            case 5:
                return { ...data, kind: 'Vitesse' };
            case 6:
                return { ...data, kind: 'Intensité' };
            default:
                return {...data };
        }
    })
   return dataFormat;
}




export {
    getUserInfos,
    getUserActivity,
    getUserAVerageSessions,
    getUserPerformance


}
