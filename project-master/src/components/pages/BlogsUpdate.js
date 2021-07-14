import React,{useEffect,useState}  from 'react'

 function BlogsUpdate(props){
     console.log("call has reached here")
const [nBlogs,setBlogCount]=useState(0);
   return 
        (props.countSend(nBlogs));
    
    
}

export default BlogsUpdate;