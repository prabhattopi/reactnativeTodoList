//validation
//1.first letter capital
//2.alphanumeric
//4.don't have special characters

// let Capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let Small = 'abcdefghijklmnopqrstuvwxyz'
// let Numbers = '0123456789'
// let obj = {
//   1: "@",
//   2: "$",
//   3: "%",
//   4: "#",
//   5: "&",
//   6: "*"

// }

// function password(pass) {
//   let countofCapitalLetter = 0
//   for (let key of Capital) {
//     if (pass[0] === key) {
//       countofCapitalLetter++
//     }
//   }
//   if (countofCapitalLetter === 0) {
//     return "Password must have first letter capital"

//   }
//   let countofSmal = 0
//   let countofNumber = 0
//   for (let key of pass) {
//     for (let small of Small) {
//       if (key === small) {
//         countofSmal++
//       }
//     }
//     for (let num of Numbers) {
//       if (key == num) {
//         countofNumber++
//       }
//     }
//   }
//   if (countofNumber == 0 || countofSmal == 0) {
//     return "Password must be alphanumeric"
//   }
//   for (let key of pass) {
//     for (let special in obj) {
//       if (key === obj[special]) {
//         return "password must not have special characters"
//       }
//     }
//   }

//   return "Hurrah right password"
// }

// console.log("dfjkdsjflds--->", password("dfjkdsjflds"))
// console.log("Dfjkdsjflds--->", password("Dfjkdsjflds"))
// console.log("Dfjkdsj9fl$ds--->", password("Dfjkdsj9fl$ds"))
// console.log("Dfjkdsj9flds--->", password("Dfjkdsj9flds"))

//email validation

// small letter no caps
// no special characters
// @ is present
// webmail provider name after @
// having only few domain extensions like(.com,.org,.io....etc)

let Capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let obj = {
  1: '$',
  3: '%',
  4: '#',
  5: '&',
  6: '*',
};
let domainProvider = {
  1: '@gmail',
  2: '@yahoo',
  3: '@borderfree',
  4: '@masai',
};
let domain = {
  1: '.com',
  2: '.io',
  3: '.org',
  4: '.in',
};

function email(mail) {
  for (let key of mail) {
    for (let cap of Capital) {
      if (key === cap) {
        return 'Email must not have Capital letters';
      }
    }
  }
  let countSpecial = 0;
  for (let key of mail) {
    for (let special in obj) {
      if (obj[special] === key) {
        countSpecial++;
      }
    }
  }
  if (countSpecial > 0) {
    return 'NO special characters are allowed';
  }

  let countofatTherate = 0;
  for (let key of mail) {
    if (key === '@') {
      countofatTherate++;
    }
  }
  if (countofatTherate != 1) {
    return 'Must have at the rate or only one at the rate';
  }
  let countDomainProvider = 0;
  for (let domain in domainProvider) {
    if (mail.includes(domainProvider[domain])) {
      countDomainProvider++;
    }
  }
  let atRateindex = mail.indexOf('@');
  let dotindex = 0;
  let countDomainExtension = 0;
  for (let ext in domain) {
    if (mail.includes(domain[ext])) {
      countDomainExtension++;
      dotindex = mail.indexOf(domain[ext]);
    }
  }

  if (countDomainProvider == 0) {
    return 'Email must have domain provider name after @';
  }
  if (countDomainExtension == 0) {
    return 'Email must have domain extension';
  }
  if (dotindex < atRateindex) {
    return 'not valid email please try valid one';
  }
  return 'hurrah valid email';
}

console.log('prabhat.singh------>  ', email('prabhat.singh'));
console.log('prabhat.singh@------>  ', email('prabhat.singh@'));
console.log('prabhat.singh@gmail------>  ', email('prabhat.singh@gmail'));
console.log(
  'prabhat.singh@gmail.com------>  ',
  email('prabhat.singh@gmail.com'),
);
