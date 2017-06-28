const family1 =
{
  lastName: "Smith",
  familyMembers: ["Bob","Fred","John"]
}

const family2 = {
  lastName: "Jones",
  familyMembers: ["A","B","C","D","E"]
}
const largeFamilySize=6
const isBigFamily = (family) => {
  if (family.familyMembers.length>= largeFamilySize) {
  return true
}
  else {
    return false
  }
}
const marry = (person1, person2) => {return family1.lastName + "-" + family2.lastName}
const newFamilyMember = (family)=> {
  family.familyMembers.push(prompt("What is the newborn's name?"))
return family
}
isBigFamily(newFamilyMember(family2))
