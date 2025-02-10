// Generator Functions: ye 1 hi bar sab kuch execute nhi krte but ye resuem base pr kam krte ha means chunk by chunk execution hoti ha in me, like apne 1st time function call kia to is ne 1 result generate kia apne dubara function call kia to is ne phir se kuch result generate kia.

function* numberGenerator() {
    yield "First Value Arslan"
    yield 10
    yield "Last Value"
}

let gen = numberGenerator()
let genTwo = numberGenerator()


console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


console.log(genTwo.next().value)
console.log(genTwo.next().value)
console.log(genTwo.next().value)


// function* with astric and yeild keyord known as Generator 
// .next() is called iterators.