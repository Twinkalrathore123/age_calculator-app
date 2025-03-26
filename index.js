function calculateage(){
    const today=new Date();
    const inputdate=document.getElementById("birthdate").value;
    const part=inputdate.split("-");
    const day=part[2];
    const month=part[1]-1;
    const year=part[0];
    const birthdate=new Date(year,month,day);

    const ms=today-birthdate;
    const s=Math.floor(ms/1000);
    const m=Math.floor(s/60);
    const h=Math.floor(m/60);
    const d=Math.floor(h/24);
    const w=Math.floor(d/7);
    const mo=Math.floor(d/30.436875);
    const y=Math.floor(d/365.25);
    
    const resultContainer=document.getElementById("resultContainer");
    const result=document.getElementById("result");

    result.innerHTML=`
        <div class="result-item">
                <h3>AGE:</h3>
                <p>${y} years ${mo % 12} months ${d % 30} days </p>
        </div>
        <div class="result-item">
                <h3>year passed:</h3>
                <p>${y} years</p>
        </div>
        <div class="result-item">
                <h3>month passed:</h3>
                <p>${mo} months</p>
        </div>
        <div class="result-item">
                <h3>week passed:</h3>
                <p>${w} weeks</p>
        </div>
        <div class="result-item">
                <h3>day passed:</h3>
                <p>${d} days</p>
        </div>
        <div class="result-item">
                <h3>hours passed:</h3>
                <p>${h} hours</p>
        </div>
        <div class="result-item">
                <h3>minutes passed:</h3>
                <p>${m} minutes</p>
        </div>
        <div class="result-item">
                <h3>sec passed:</h3>
                <p>${s} secs</p>
        </div>
    `;

    resultContainer.style.display="block";

}
const age=document.getElementById("agecalculator");
age.addEventListener("submit",(event)=>{
    event.preventDefault();
    calculateage();
});

