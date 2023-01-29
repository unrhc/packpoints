// export const getData = () => {
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//     };
      
//     fetch("https://script.google.com/macros/s/AKfycbx3EYsAmGUp3nql4gkRvcuGOTSaVL1ZO3UuNvTioxskYtY3UCcOML-_v_0mfLVJSlQ8/exec", requestOptions)
//     .then(response => response.json())
//     .then((data) => dataProcessing(data))
//     .catch(error => console.log('error', error)); 
// }
// let obj;
// export async function getData() {
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//     };
  
//     const res = await fetch('https://script.google.com/macros/s/AKfycbx3EYsAmGUp3nql4gkRvcuGOTSaVL1ZO3UuNvTioxskYtY3UCcOML-_v_0mfLVJSlQ8/exec', requestOptions)
  
//     obj = await res.json();
  
//     obj = dataProcessing(obj);
    
//     return obj;
// }

const emails = new Set()

const accounts = []

export const dataProcessing = (result) => {
    result = result['GoogleSheetData']
    for (let i = 0; i < result.length; i++) {
        let newResult = result[i]
        for (let j = 1; j < newResult.length; j++) {
            if (!emails.has(newResult[j][1])) {
                emails.add(newResult[j][1])
                accounts.push({email: newResult[j][1], points: newResult[j][2], name: newResult[j][3], hall: newResult[j][4]})
            }
            else {
                for (const account of accounts) {
                    if (account['email'] === newResult[j][1]) {
                        account['points'] += newResult[j][2]
                    }
                }
            }
        }
    }
    console.log(accounts)
    console.log(emails)
    return accounts;
}
