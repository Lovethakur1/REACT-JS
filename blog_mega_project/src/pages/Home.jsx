import React ,{useEffect,useState} from 'react'
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function Home() {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    })

    if(posts.length === 0){
        
        return (
            <div className="w-full py-8">
                <Container>
                    <h1 className="text-2xl text-center">No Posts Found</h1>
                </Container>
            </div>
        )
    }
    else{
        return(
            <div>
                <div className="w-full py-8">
                    <Container>
                        <div className="flex flex-wrap">
                            {
                                posts.map((post)=>(
                                    <div key={post.$id} className="p-2 w-1/3">
                                        <PostCard {...post} />
                                    </div>
                                ))
                            }
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home