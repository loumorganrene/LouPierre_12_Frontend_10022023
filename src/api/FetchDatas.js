export async function fetchDatas(URL) {
    return await fetch(URL)
        .then(res => res.json())
        .then((data => data.data))
        .catch(function (error) {
            console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message);
        })
}