//  *** 2.8 ***
function task_2_8_1() {
  let a = 1,
    b = 1;
  let c = ++a; // 2
  let d = b++; // 2
}
//
function task_2_8_2() {
  let a = 2;
  let x = 1 + (a *= 2); //5
}
//
function task_2_8_3() {
  "" + 1 + 0; // 10
  "" - 1 + 0; // -1
  true + false; // 1
  6 / "3"; // 2
  "2" * "3"; // 6
  4 + 5 + "px"; // 45px
  "$" + 4 + 5; // $45
  "4" - 2; // 2
  "4px" - 2; // NaN
  7 / 0; //Infinity
  "  -9  " + 5; //-9 5
  "  -9  " - 5; // -14
  null + 1; // 1
  undefined + 1; // NaN
  " \t \n" - 2; // -2
}
//
function task_2_8_4() {
  let a = prompt("First number?", 1);
  let b = prompt("Second number?", 2);

  alert(Number(a) + Number(b)); // 3
}

// *** 2.9 ***
function task_2_9() {
  5 > 4; // true
  "apple" > "pineapple"; // false
  "2" > "12"; // false
  undefined == null; // true
  undefined === null; // false
  null == "\n0\n"; // true
  null === +"\n0\n"; // false
}

// *** 2.10 ***
function task_2_10_1() {
  if ("0") {
    alert("Hello"); // "0" = true, output 'Hello'
  }
}
//
function task_2_10_2() {
  let isECMAScript =
    prompt("What is the “official” name of JavaScript?") == "ECMAScript";
  if (isECMAScript) alert("Right");
  else alert("Didn`t know? ECMAScript");
}
//
function task_2_10_3() {
  let number = prompt("Write a number");
  if (number > 1) alert(1);
  else if (number < 1) alert(-1);
  else alert(0);
}
//
function task_2_10_4() {
  let result = a + b < 4 ? "Below" : "Over";
}
//
function task_2_10_5() {
  let message = login == "Employee" ? "Hello"
    : login == "Director" ? "Greetings"
    : login == "" ? "No login"
    : "";
}
// *** 2.11 ***
function task_2_11_1(){
    alert( null || 2 || undefined ); // 2
}
//
function task_2_11_2(){
    alert( alert(1) || 2 || alert(3) ); // 1 => 2
}
//
function task_2_11_3(){
    alert( 1 && null && 2 ); // null
}
//
function task_2_11_4(){
    alert( alert(1) && alert(2) ) // 1 => undefined  ??????
}
//
function task_2_11_5(){
    alert( null || 2 && 3 || 4 ); // 3
}
//
function task_2_11_6(){
    let age = 14;
    if(age >= 14 && age<=90){
        //smth
    }
}
//
function task_2_11_7(){
    let age = 14;
    if(!(age >= 14) && !(age <= 90)){
        //smth
    }
    if(age < 14 && age > 90){
        //smth
    }
}
//
function task_2_11_8(){
    if (-1 || 0) alert( 'first' );
    if (-1 && 0) alert( 'second' );
    if (null || -1 && 1) alert( 'third' );
}
//
function task_2_11_9(){
    // version 1
    login = prompt("Your login:", '')
    if(login){
        if(login == 'Admin'){
            password = prompt('Your password:')
            if(password == 'TheMaster') alert('Welcome')
            else if(password == 'null') alert('canceled')
            else alert('Wrong password')
        }else alert('I don`t know you..')
    }else alert('Canceled')
    // version 2
    let log = prompt('Your login:')
    let pass;
    if(log && log == "Admin")
        if(pass = prompt("Your password") == 'TheMaster') alert("Welcome")
        else if(pass == null) alert('Canceled')
        else alert("Wrong password")
    else if(log && log != "Admin") alert('I don`t lnow you')
    else alert('Canceled')
}
// *** 2.13 ***
function task_2_13_1(){
    let i = 3;

    while (i) {
        alert( i-- );     // the las value of i = 1
    }
}
//
function task_2_13_2(){
    let i = 0;
    while (++i < 5) alert( i ); // 1 => 2 => 3 => 4 

    let j = 0;
    while (j++ < 5) alert( j ); // 1 => 2 => 3 => 4 => 5
}
//
function task_2_13_3(){
    for (let i = 0; i < 5; i++) alert( i ); // 0 => 1 => 2 => 3 => 4 
    for (let i = 0; i < 5; ++i) alert( i ); // 0 => 1 => 2 => 3 => 4
}
//
function task_2_13_4(){
    for(let i = 2; i <= 10; i++) alert(i)
}
//
function task_2_13_5(){
    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }
    
    let i = 0
    while(i<3){
        alert(`number ${i}`)
        i++
    }
}
//
function task_2_13_6(){
    let input = prompt('Write a bigger number than 100:');
    while(input<100) input = prompt('Number must be bigger than 100! Try again: ')
}
//
function task(){
    let n = prompt("Set n:")
    
    for(let i = 2; i < n; i++){
        if(i % 2 !== 0){
            let temp = 0;
            for(let j = 2; j < i; j++){
                if(i%j === 0) temp++
            }
            if(temp === 0){
                console.log(`Prime number: ${i}`)
            }
        }
    }
}
// *** 2.14 ***
function task_2_14_1(){
    switch (browser) {
        case 'Edge':
          alert( "You've got the Edge!" );
          break;
      
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
          alert( 'Okay we support these browsers too' );
          break;
      
        default:
          alert( 'We hope that this page looks ok!' );
      }
      // "If...else" version
      let browser = prompt("Set your browser:")
      if(browser === 'Edge') alert( "You've got the Edge!" );
      else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') alert( 'Okay we support these browsers too' );
      else alert( 'We hope that this page looks ok!' );
}

function task_2_14_2(){
    let a = +prompt('a?', '');

    if (a == 0) {
    alert( 0 );
    }
    if (a == 1) {
    alert( 1 );
    }

    if (a == 2 || a == 3) {
    alert( '2,3' );
    }
    // "switch" version
    let a = +prompt('a?', '')

    switch(a){
        case '0': alert(0)
        case '1': alert(1)
        case '2':
        case '3': alert('2,3')
        default:
    }
}
// *** 2.15 ***
// task_2_15_1
    function checkAge(age) {
        if (age > 18) {
          return true;
        } else {
          // ...
          return confirm('Did parents allow you?');
        }
      }

    // these function have the save output

    function checkAge(age) {
        if (age > 18) {
          return true;
        }
        // ...
        return confirm('Did parents allow you?');
    }

// task_2_15_2(){
    function checkAge(age) {
        if (age > 18) {
          return true;
        } else {
          return confirm('Did parents allow you?');
        }
      }
    
    function checkAge(age){
        return age > 18 ? true : confirm('Did parents allow you?')
    }
    function checkAge(age){
        return age > 18 || confirm('Did parents allow you?')
    }
//
//task_2_15_3(){
    function min(a, b){
        return a < b ? b : a > b ? b : a
    }
//task_2_15_4
    let a = prompt('Select number:')
    let b = prompt('Select power number:')
    alert(pow (a, b))

    function pow(a, b){
        return a ** b
    }
// *** 2.17 ***

// task 2_17
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

  ask(
      'Do you agree?',
      () => alert('You agreed.'),
      () => alert('You canceled the execution.')
  )

// *** 6.1 *** //

// task 6_1_1

function sumTo(n){
    let result = 0;
    for(let i=1; i <= n; i++){      // loop
        result += i;
        console.log(result)
    }
    return result
}

function sumTo(n){
    return n === 1 ? n : n + sumTo(n-1)  // recursion
}

function sumTo(n){
    return ((2 + n-1)/2)*n
}

// task 6_1_2 
function factorial(n){
    return n === 1 ? n : n * factorial(n-1);
}

// list ? fib ?

  
