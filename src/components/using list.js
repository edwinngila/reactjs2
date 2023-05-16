let List=()=>{
    let students=[
        {id:"1",name:"edwin",course:"software dev",year:"2023"},
        {id:"2",name:"peter",course:"cyber security",year:"2023"},
        {id:"3",name:"kyalo",course:"software dev",year:"2022"},
        {id:"4",name:"kimani",course:"database",year:"2020"}
    ]
    let list = students.map((students)=>(
        <h1 key={students.id}>
            {students.name},
            {students.course},
            {students.year}
        </h1>
    ));
    return(
        <div>
            <h1>{list}</h1>
        </div>
    )
}
export default List