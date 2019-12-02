import React from 'react';
function Tablelist() {

    const details=[
        {
            person1:'rizan',
            person2:'john',
            person3:'acvb',
            person4:'cvv'
        },
        {
            person1:20,
            person2:2,
            person3:23,
            person4:22
        },
        { 
            person1:'react',
            person2:'html',
            person3:'ml',
            person4:'ai'
            
        },
        
    ]
    
    return(
        <div>
            <th>Name</th>
            <th>Age</th>
            <th>Skill</th>
            <tr>{details.map(namep => <td key={namep.person1}>{namep.person1}</td>)}</tr>
            <tr>{details.map(namep => <td key={namep.person1}>{namep.person2}</td>)}</tr>
            <tr>{details.map(namep => <td key={namep.person1}>{namep.person3}</td>)}</tr>
            <tr>{details.map(namep => <td key={namep.person1}>{namep.person4}</td>)}</tr>
        </div>
    )
    
}
export default Tablelist;