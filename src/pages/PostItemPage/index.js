import PageContainer from "../../components/PageContainer";
import { useParams, Link } from "react-router-dom";
import * as database from "../../database";
import NotFoundPage from "../NotFoundPage";
import "./styles.scss";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

export default function PostItemPage() {

  const params = useParams();
  const [post, setPost] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);

  // Load post from the database.
  useEffect(() => {
    // IIFE
    (async () => {
      const loadedPost = await database.loadById(params.id);
      setPost(loadedPost);
      setIsLoading(false);
    })();

    // eslint-disable-next-line
  }, []);
  
  if(isLoading) {
    return <Loading />
  }

  if(!post) {
    return <NotFoundPage />
  }
  
  return (

    <PageContainer title={post.title} className='post-item-page'>
      <div className='picture'>
        <img src={post.picture} alt={post.title} />
      </div>

      <div className='description'>
        {post.description}
      </div>

      <Link to='/posts' className='back-link'>Back</Link>
    </PageContainer>

  );

}