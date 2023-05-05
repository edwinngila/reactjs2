let Mapping = ()=>{
    // let price=[150,160,200,300];
    // let calc= price.map((price)=>((price*0.1)+price)+',');
    // return <h1>{calc}</h1>
      // let students=["john","elvis","jim","derick"];
    // let list = students.map((student)=>(
    //     <h1>{student}</h1>
    // ));
    // return<h1>{list}</h1>
    let students =[
        {id:"1",course:"fullstack",year:"2023"},
        {id:"2",course:"cyber",year:"2024"},
        {id:"3",course:"database",year:"2020"},
        {id:"4",course:"fullstack",year:"2023"}
    ];
    let list = students.map((students)=>(
       <h1 key={students.id}>{students.id},{students.course},{students.year}</h1>
    ));
    return <h1>{list}</h1>
}
export default Mapping;