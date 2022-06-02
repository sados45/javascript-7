
// Ödev soru cözümü;

/*const fbArray =[];
let count = 1;

function fizzBuzz(){
    if(count % 3==0 && count % 5!=0){
        fbArray.push('Fizz');
    }else if (count % 5 ==0 && count % 3 !=0){
        fbArray.push('Buzz')
    }else if (count % 3 == 0 && count % 5 == 0){
        fbArray.push('FizzBuzz')
    }else { 
        fbArray.push(count)
    }

    count ++
    return fbArray
    
}
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())
console.log(fizzBuzz())

*/
/*
//______________LOOP (amac tekrardan kurtarmaktir.ALANDAN VE KODDAN TASARRUF SAGLAMAK ICIN KULLANILIR: )

console.log('push up 1')
console.log('push up 2')
console.log('push up 3')
console.log('push up 4')
console.log('push up 5')
console.log('push up 6')
console.log('push up 7')
console.log('push up 8')
console.log('push up 9')
console.log('push up 10')
*/
/*
for(let rep = 1; rep <= 30; rep ++){
    console.log('push up ${rep') // COK ÖNEMLI 30 defa console.log yazdirmaktansa bu sekilde kodlama yapmak zaman ve yer tasarrufu saplar. bunu sadece console icin degil her turlu kodlama icin yapaniliyoruz.
}
*/
//fizzbuzz sorusunu loop ile cozme.
/*
const fbArray =[]
for (let i = 1; i <=100; i++){

    if (i % 3 == 0 && i % 5== 0){
        fbArray.push('FizzBuzz')
    }else if (i % 5 ==0){
        fbArray.push('Buzz')
    }else if (i % 3 == 0){
        fbArray.push('Fizz')

    }else{
        fbArray.push(i)
    }
    
}

console.log(fbArray)// 100e kadar olan sayilari sorunun cözumune göre consola yazdirdik.
*/
// bu sorunun cözümünü function ile yapabiliriz. onun icine bir for döngusu olusturup sonunda return edersek yine cözume ulasiriz. 

/*
    const fbArray =[]
    function fizzBuzz(){
    
    for (let i = 1; i <=100; i++){

    if (i % 3 == 0 && i % 5== 0){
        fbArray.push('FizzBuzz')
    }else if (i % 5 ==0){
        fbArray.push('Buzz')
    }else if (i % 3 == 0){
        fbArray.push('Fizz')

    }else{
        fbArray.push(i)
    }
   }
   return fbArray
}

console.log(fizzBuzz()) // yukaridaki cözümler gibi yine ayni cözümlemeyi yapti.bu cözüm de function ile for if kullaniminin tamamini icermis oldu.
*/
/*
const array = ['data1', 'data2', 'data3', 'data4', 'data5']

//console.log(array[0])
//console.log(array[1])
//console.log(array[2])
//console.log(array[3])

for(let i = 0; i <array.length; i++){
    console.log(array [i])//burada herhangi bir sayi vermeden array.length yazmamizin sebebi, eger kac tane oldugunu bilmiyorsak kolayca bunu yazip uzunlugu hesap etmekten kurtulmus oluruz. yukaridaki const array icinde yer alan datalarin tamamini yazdirmis olduk .
}   

*/

// __________CONTINUE - BREAK METHODU

//herhangi bir sarti saglamiyorsa devam et yoluna atla demek. mesela;
/*
let evenNumbers = []

for(let i = 0; i<= 100; i++){

    if(i % 2 != 0) continue // coontinue devam et demek.
    if (i==50) break // 50 ye geldiginde kes ve sonuca gidiyor. 
    evenNumbers.push(i)

}
console.log(evenNumbers) //burada eger 2 ye bolumden kalan 0 cikmiyorsa bu sayiyi direk atla diyor. yani aslinda cift sayilari yazdir ver diyor. 100 e kadar olan tüm sayilari bize veriyor
*/
/*
//örnegin;

for (let i= 1; i <= 3; i++){

    console.log('----- Exercise ${i}')//burada 3 egzersiz belirlendi. ama bu 3 egzersiz 5 kez tekrarlanarak yapilmasi icin for döngüsü icinde tekrar for döngüsü kullandik. ÖNEMLI
    for (let k = 1; k <= 5; k++) {
        console.log('repeat ${k}')
        for (let m = 1; m <= 3; m++) {
            console.log('break ${m} sec') //burada her exersiz icinde 5 repeat vardi. simdi her repeat icine 3 dakida dinlenme koyduk. ic ice for döngüsü devam ediyor. 
        }
}
}
*/

//10 sayisindan geri dogru eksiltecegiz. 
/*
const reverseArr = []

for(let i = 10; i >= 0; i--){

    reverseArr.push(i)

}
console.log(reverseArr) //burada 10 dan geriye dogru yazdirdi.

//genelde bu tarz kullanimlar iki farkli array i karsilastirmada kullaniliyor. birini normal saydirirken digerini tersten kullanarak bakis acisi degistirilebiliyor. 

*/
/*
//_______WHILE DÖNGUSU


let rep = 1
while(rep <= 10 ){
    console.log('push up ${rep}')
    rep++
} // bilgisayar sonsuz döngüye girdi. ve rep++ yaparak sartlari degistirmek zorunda kaldik.

//zar atma ile ilgili bir örnek;

let dice = Math.trunc(Math.random() * 6)//random rastgele sayi üretir. 0 ile 1 arasinda bize sayi vigüllü üretiyor. zar 1den 6ya kadar oldugu icin 6 ile carpmamiz lazim. Math.trunc özelligiyle virgüllü sayilardan kurtulduk. sadece sayi tek olarak geliyor rastgele.

    while(dice !==6) { //burada hem 6 ya esitse hemde degilse yani 6ya girecek ama cikacak cunku zar atiyoruz. 
    console.log('You rolled ${dice}')
    dice= Math.trunc(Math.random() *6) +1
    console.log(dice== 6 ? "You win": "Try again") // burada 6 gelirse kazan yada tekrar dene dendi. sürekli deniyor. 6 gelinceye kadar. 
}

//do while methodu:

// 1den 10 a kadar olan sayilari toplamasini isteyecegiz. 

let num = 1;
let sum = 0

do{
    sum += num
    num++

}while (num<=10)
console.log("The total is: ", sum) //1den 10a kadar olan sayilarini topladik ve 55 sonucunu bulduk. en az bir kere calisma sarti var do while ile. mesela 11 dersek let num=11 mesela, total 11 verir. cunku sart 1den 10 a kadar oldugu icin bu sekilde. ama sonucu 11 verir. yani burada random luk bir durum yok. 
console.log("The total is: ", sum)
*/
//diger örnek;


const number = prompt("Please enter a number: ")

function isArmstrong(number){

    let len= number.length //ilk sayinin uzunlugunu alacagiz.
    let arr= number.split('') //array atamasi yapan split özelligini kullaniyoruz.
    let sum =0
    console.log(arr)
    for (let i = 0; i< arr.length; i++){//i sayinin uzunlugundan kücük olmali ama artmali.
        sum += arr[i] ** len //burada sayinin karesini aliyoruz.
    }
    return sum == number ? '${number} is Armstrong' : '${number} is not Armstrong'
}
    console.log(isArmstrong(number))//bir sayinin Armstrong olup olmadigini denetledik. 

    