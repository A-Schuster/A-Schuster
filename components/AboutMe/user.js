const createUser = (name,knowledge,about,goals) => {
  return {
    name: {
      firstName: name.firstName,
      lastName: name.lastName,
    },
    knowledge,
    about,
    goals
  }
}

const aboutAustin = "Im a Longboarding, indoor climbing, DogFather.";
const austinKnowledge = ["React","CSS","Node.Js","Bootstrap"];
const austinName = {
  firstName: "Austin",
  lastName: "Schuster"
}
const austinGoals = "Grow my knowledge and one day be a fullstack developer"

export const Austin = createUser(austinName,austinKnowledge,aboutAustin,austinGoals)

