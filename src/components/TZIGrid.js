import React from 'react'

const GridCell = ({data}) => (
    <div>
        <img src={`images/${data}.png`} 
            style={{
            width: '120px',
            marginBottom: 0,
        }}/>
    </div>
)

const TZIGrid = ({data}) => (
 <div>
     <div style={{
         display: 'flex',
         marginBottom: 0,
     }}>
         <div>
             <GridCell data={data[0]} />
         </div>
         <div>
             <GridCell data={data[1]} />
         </div>         
         <div>
             <GridCell data={data[2]} />
         </div>
    </div>
    <div style={{
         display: 'flex',
         marginBottom: 0,
     }}>
         <div>
             <GridCell data={data[3]} />
         </div>
         <div>
             <GridCell data={data[4]} />
         </div>         
         <div>
             <GridCell data={data[5]} />
         </div>
    </div>
    <div style={{
         display: 'flex',
         marginBottom: 0,     }}>
         <div>
             <GridCell data={data[6]} />
         </div>
         <div>
             <GridCell data={data[7]} />
         </div>         
         <div>
             <GridCell data={data[8]} />
         </div>
    </div>
    <div style={{
         display: 'flex',
         marginBottom: 0,     }}>
         <div>
             <GridCell data={data[9]} />
         </div>
         <div>
             <GridCell data={data[10]} />
         </div>         
         <div>
             <GridCell data={data[11]} />
         </div>
    </div>
 </div>   
)

export default TZIGrid