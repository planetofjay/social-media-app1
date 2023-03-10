import PageContainer from "../../components/PageContainer";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotFoundPage from "../NotFoundPage";
import './styles.scss';

export default function PostItemPage() {

  const params = useParams();
  const post = useSelector(
    (state) => state.post.posts.find((post) => post.id === params.id)
  );

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