console.log("JS Loaded");

const students = [
    {name: "Joko Ireng", class: "Fullstack 1", score: 90 },             
    {name: "Putri Ayu", class: "Fullstack 3", score: 88 },
    {name: "Ekko Plagiat", class: "Fullstack 2", score: 90 },
    {name: "Budi Batman", class: "Fullstack 2", score: 78 },
    {name: "Suparman", class: "Fullstack 1", score: 95 },
    {name: "Pana Doll", class: "Fullstack 2", score: 80 },
    {name: "Ksii Push", class: "Fullstack 3", score: 88 },
    {name: "Gina M. A.", class: "Fullstack 1", score: 98 },
    {name: "Aika N. Lohan", class: "Fullstack 3", score: 90 },
    {name: "Jiuu", class: "Fullstack 1", score: 90 }
];

const tableBody = document.getElementById("tableBody") as HTMLTableSectionElement;
const searchInput = document.getElementById("search") as HTMLInputElement;
const averageText = document.getElementById("average") as HTMLDivElement;

console.log(tableBody);
console.log(searchInput);
console.log(averageText);

interface Student{
    name: string;
    class: string;
    score: number;
    
}

function renderTable(data:Student[]){
    tableBody.innerHTML = "";
    
    data.map((student, index) => {                              
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.class}</td>
                <td>${student.score}</td>
            </tr>
        `;
    });


    const totalScore = data.reduce((total, student)=>{          
        return total + student.score;
    }, 0);

    const average = data.length > 0                                                        
                    ?(totalScore / data.length).toFixed(2): 0;

    averageText.textContent =
        `Rata-rata Nilai: ${average}`;
}

renderTable(students);

// search dengan filter
searchInput.addEventListener("keyup", ()=>{
    
    const keyword = searchInput.value.toLowerCase();              
    
    const filteredStudents = students.filter(student =>     
        student.name.toLowerCase().includes(keyword)
    );

    renderTable(filteredStudents);
});

