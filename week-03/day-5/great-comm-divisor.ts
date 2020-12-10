'use strict';
export { };
// Find the greatest common divisor of two numbers using recursion

/*
Számok legnagyobb közös osztójának alábbi algoritmusát Eukleidész határozta meg.
Ez az algoritmus az alábbi oszthatósággal kapcsolatos észrevételen alapszik: Ha a=b⋅q+r, 
akkor (a,b)=(b,r), ahol a, b, q, r egész számok. Mivel a maradékos osztás maradéka mindig 
kisebb az osztónál, ezért két szám legnagyobb közös osztójának meghatározása mindig vissza-
vezethető két kisebb szám legnagyobb közös osztójának megkeresésére.
Például: Határozzuk meg 252 és 2205 legnagyobb közös osztóját. 

2205=252⋅8+189, és (2205,252)=(252,189)
252=189⋅1+63, és (252,189)=(189,63)
189=63⋅3+0, és (189,63)=63
 Vagyis (252,2205)=63.
*/

function gcd(n1: number, n2: number) {
  if (n2 === 0) {
    return n1
  }
  return gcd(n2, n1 % n2)
}
console.log(gcd(2205, 252));
console.log(gcd(252, 2205));