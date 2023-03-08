export const items = [
  { id: 0, nombre: "Javi" },
  { id: 1, nombre: "Gabriel" },
  { id: 2, nombre: "Antonio" },
  { id: 3, nombre: "Jesus" },
  { id: 4, nombre: "Andrea" },
  { id: 5, nombre: "Elena" },
  { id: 6, nombre: "Carlos" },
  { id: 7, nombre: "Javi" },
];

export function getContact(id){
    return items.find((item) => item.id == id)
}
