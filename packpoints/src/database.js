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

// const emails = new Set()

// const accounts = []

const compare = (a, b) => {
    if ( a.points < b.points ){
        return 1;
    }
    if ( a.points > b.points ){
        return -1;
    }
    return 0;
}

// export const dataProcessing = (result) => {

//     for (const account of accounts) {
//         account['points'] = 0;
//     }

//     result = result['GoogleSheetData']
//     for (let i = 0; i < result.length; i++) {
//         let newResult = result[i]
//         for (let j = 1; j < newResult.length; j++) {
//             if (!emails.has(newResult[j][1])) {
//                 emails.add(newResult[j][1])
//                 accounts.push({email: newResult[j][1], points: newResult[j][2], name: newResult[j][3], hall: newResult[j][4]})
//             }
//             else {
//                 for (const account of accounts) {
//                     if (account['email'] === newResult[j][1]) {
//                         account['points'] += newResult[j][2]
//                     }
//                 }
//             }
//         }
//     }
//     return accounts.sort( compare );
// }

export const sheetProcessing = (text) => {
    //text = text.replaceAll('\n', ' ').split(' ')
    const id_accounts = [];
    text = text.split('\n')
    for (let i = 0; i < text.length; i++) {
        let temp = text[i].split(' ')
        if (temp.length === 4) {
            id_accounts.push({id: temp[0], points: Number(temp[1]), hall: temp[2] + ' ' + temp[3]})
        }
        else if (temp.length === 5) { // Great Basin
            id_accounts.push({id: temp[0], points: Number(temp[1]), hall: temp[2] + ' ' + temp[3] + ' ' + temp[4]})
        }
    }
    return id_accounts.sort( compare );
}

export const sortByHall = (data, hall) => {
    // console.log('Hello?')
    hall = hall['value']
    // console.log(hall)
    // console.log(data);
    let output = []
    for (let i = 0; i < data.length; i++) {
        if (data[i]['hall'] === hall || hall === 'All Halls') {
            // console.log('?')
            output.push(data[i]);
        }
    }
    return output;
}

