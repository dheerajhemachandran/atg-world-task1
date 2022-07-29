import React from 'react'
import Groups from './Groups'
import Pnavbar from './subcomponents/Pnavbar'
import Post from './subcomponents/Post'
import post1 from './utils/post1.png'
import post2 from './utils/post2.png'
import post3 from './utils/post3.png'
import pro1 from './utils/profile/profile1.png'
import pro2 from './utils/profile/profile2.png'
import pro3 from './utils/profile/profile3.png'

const Posts = ({grouped,setgrouped}) => {
  const postarr=[{
    pic:post1,
    title:"What if famous brands had regular fonts? Meet RegulaBrands!",
    topic:"article",
    type:1,
    subtitle:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    name:"Sarthak Kamra",
    views:"1.4k views",
    profile:pro1
  },
  {
    pic:post2,
    title:"Tax Benefits for Investment under National Pension Scheme launched by Government",
    topic:"🔬️ Education",
    type:1,
    subtitle:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    name:"Sarah West",
    views:"1.4k views",
    profile:pro2
  },
  {
    pic:post3,
    title:"Finance & Investment Elite Social Mixer @Lujiazui",
    topic:"🗓️ Meetup",
    type:2,
    name:"Ronal Jones",
    date:"Fri, 12 Oct, 2018",
    location:"Ahmedabad, India",
    views:"1.4k views",
    profile:pro3
  }]
  return (
    <div className='posts'>
      <Pnavbar grouped={grouped} setgrouped={setgrouped}/>
        <div className="row">
          <div className="col-lg-9 col-12">
            {postarr.map(post=>(
                <Post arr={post}/>
            ))}
          </div>
          <div className="col-lg-3 col-12 ps-5">
            <Groups grouped={grouped}/>
          </div>
        </div>
      </div>
  )
}

export default Posts
