// data.json 파일을 로드하여 테이블을 동적으로 생성하는 함수
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            generateTable(data[0], 'tools-table'); // "개발도구" 테이블 생성
            generateTable(data[1], 'asp-tools-table'); // "ASP 도구" 테이블 생성
        })
        .catch(error => console.error('Error loading data:', error));
});

// 테이블을 생성하는 함수
function generateTable(data, tableId) {
    const table = document.getElementById(tableId).getElementsByTagName('tbody')[0];

    data.tools.forEach(tool => {
        const row = document.createElement('tr');

        // "구분"에 title 추가
        const categoryCell = document.createElement('td');
        categoryCell.textContent = tool.title;
        row.appendChild(categoryCell);

        // "도구"에 items의 name 추가
        const toolsCell = document.createElement('td');
        tool.items.forEach(item => {
            toolsCell.innerHTML += item.name + "<br/>";
        });
        row.appendChild(toolsCell);

        // "URL"에 href 및 view 추가
        const urlCell = document.createElement('td');
        tool.items.forEach(item => {
            item.url.forEach(url => {
                urlCell.innerHTML += `<a href="${url.href}" target="_blank">${url.view}</a><br/>`;
            });
        });
        row.appendChild(urlCell);

        const loginCell = document.createElement('td');
        tool.items.forEach(item => {
            item.url.forEach(url => {
                loginCell.innerHTML += (item.login ?? '') + "<br/>";
            });
        });
        row.appendChild(loginCell);

        table.appendChild(row);
    });
}
