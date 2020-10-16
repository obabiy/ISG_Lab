let name = prompt("Write you name here: ")
let conf = confirm('Continue?')

conf ? (name ? alert(`Hi ${name}`) : alert('You did`t write your name...')) : alert("Okay...")
