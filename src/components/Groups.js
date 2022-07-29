import React from 'react'
import Group from './subcomponents/Group'
import g1 from './utils/groups/1.jpg'
import g2 from './utils/groups/2.jpg'
import g3 from './utils/groups/3.jpg'
import g4 from './utils/groups/4.png'

const Groups = ({grouped}) => {
  const arr=[{
    pic:g1,
    name:"Leisure"
  },{
    pic:g2,
    name:"Activism"
  },{
    pic:g3,
    name:"MBA"
  },{
    pic:g4,
    name:"Philosophy"
  }]
  return (
    <div>
      <div className="input">
            
            <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label for="floatingTextarea2">
                <i class="fa-solid fa-location-dot me-2"></i>
                      Noida, India
                <i class="fa-solid fa-pencil ms-5"></i>  </label>
            </div>
        </div>
        <div className='mt-5'>
        <i class="fa-solid fa-circle-info m-2"></i>
        Your location will help us serve better and extend a personalised experience.
        </div>
        {grouped===false? <div className='mt-5'>
        
         </div>:
          <div className='mt-5'>
          <i class="fa-solid fa-thumbs-up"></i> REcommended Groups
          {arr.map(group=>(

          <Group group={group}/>

          ))}
          </div>
        
        }
       
    </div>
  )
}

export default Groups
