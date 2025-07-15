// iterar las propiedades de un objetoi

let user = {
  name: "daniel",
  id: 1,
  edad: 20,
};

for (let pro in user){
  console.log(pro, user[pro]);
}