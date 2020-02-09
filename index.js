let data = [];
fetch('https://swapi.co/api/films/')
.then(res => res.json())
.then(json => {        
    data = json.results;
    renderTable(data);
    renderDetails(data);
});

let applyBtn = document.getElementById('apply-choose');

applyBtn.onclick = function getTitle() {
    let filterChoice = document.getElementById('filter-choose');
    let input = filterChoice.value;
    let filteredData = filter(data, input, 'title');
    renderTable(filteredData);
};

function filter(data,value,key) {
    let _res = [];
    for(let i = 0; i < data.length; i++) {
        if(data[i].hasOwnProperty(key)){
            if (data[i][key].toLowerCase().indexOf(value.toLowerCase()) >= 0){
                _res.push(data[i]);
            }
        }
    }
    return _res;
};

 //function renders table with data
function renderTable(_data){
     let dataTable = document.getElementById("dataTable");
     dataTable.innerHTML = null;

    _data.forEach(element => {
        let tr = document.createElement('tr');
        
            tr.innerHTML = 
        `<td class = "table-style">
            <a class="alert-link" href = '${element.title}'>${element.title}</a>
        </td>
        <td class = "table-style">
            <a class="alert-link" href ='${element.director}'>${element.director}</a>
        </td>
        <td class = "table-style">
            <div class="producer">${element.producer}</div>
        </td>
        <td class = "table-style">
            <div>${element.release_date}</div>
        </td>
        `;
        dataTable.appendChild(tr);
    });
};

//this function is not realise completely
// function renderDetails(data) {
// let details = document.getElementById('filmDetails');

// data.forEach(elem => {
//     let item = document.createElement('div');
// item.innerHTML = 
// `
// <div>
// <h3>${elem.title}</h3>
// </div>
// <div>
// <a class="alert-link" href = '${elem.planets.map((i)=> 
//     [i])}'>${elem.planets.map((i)=> 
//         [i])}</a>
// </div>
// `
// details.appendChild(item);
// });
// };
// renderDetails(data);



